/**
 * Created by jiangqian on 2017/1/12.
 */
(function(WIN, DOC) {
    var CSS_PREFIX_MAP, DOWN, END_EVENT, IsTouch, LEFT, MAX_OPP_ALLOW_DISTANCE, MIN_ALLOW_DISTANCE, MOVE_EVENT, NULL, NUMBER_REG, RIGHT, START_EVENT, Slip, UNDEFINED, UP, WINDOW_HEIGHT, WINDOW_WIDTH, X, XY, Y, entry, getTranslate, noop, setTransition, setTranslate;
    UNDEFINED = void 0;
    NULL = null;
    X = "x";
    Y = "y";
    XY = "xy";
    LEFT = "left";
    RIGHT = "right";
    UP = "up";
    DOWN = "down";
    MIN_ALLOW_DISTANCE = 10;
    MAX_OPP_ALLOW_DISTANCE = 40;
    CSS_PREFIX_MAP = ["webkit", "moz", "ms", "o", ""];
    NUMBER_REG = /\-?[0-9]+\.?[0-9]*/g;
    IsTouch = 'ontouchend' in WIN;
    START_EVENT = IsTouch ? 'touchstart' : 'mousedown';
    MOVE_EVENT = IsTouch ? 'touchmove' : 'mousemove';
    END_EVENT = IsTouch ? 'touchend' : 'mouseup';
    WINDOW_HEIGHT = WIN['innerHeight'];
    WINDOW_WIDTH = WIN['innerWidth'];
    noop = function() {};
    setTransition = function(ele, css) {
        var name, prefix, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = CSS_PREFIX_MAP.length; _i < _len; _i++) {
            prefix = CSS_PREFIX_MAP[_i];
            name = prefix ? "" + prefix + "Transition" : "transition";
            _results.push(ele.style[name] = css);
        }
        return _results;
    };
    setTranslate = function(ele, x, y, z) {
        var name, prefix, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = CSS_PREFIX_MAP.length; _i < _len; _i++) {
            prefix = CSS_PREFIX_MAP[_i];
            name = prefix ? "" + prefix + "Transform" : "transform";
            _results.push(ele.style[name] = "translate3d(" + (x || 0) + "px, " + (y || 0) + "px, " + (z || 0) + "px)");
        }
        return _results;
    };
    getTranslate = function(ele) {
        var coord, css, name, prefix, translate, _i, _len;
        translate = [];
        css = '';
        coord = '';
        for (_i = 0, _len = CSS_PREFIX_MAP.length; _i < _len; _i++) {
            prefix = CSS_PREFIX_MAP[_i];
            name = prefix ? "" + prefix + "Transform" : "transform";
            css = ele.style[name];
            if (css && typeof css === 'string') {
                coord = css.match(/\((.*)\)/g)[0];
                translate = coord && coord.match(NUMBER_REG);
                break;
            }
        }
        if (translate.length) {
            return {
                x: translate[0] || 0,
                y: translate[1] || 0,
                z: translate[2] || 0
            };
        }
    };
    Slip = (function() {
        var getCoordinates, getCoordinatesArray;

        getCoordinatesArray = [
            function(event) {
                var e, touches;
                touches = event.touches && (event.touches.length ? event.touches : [event]);
                e = (event.changedTouches && event.changedTouches[0]) || (event.originalEvent && event.originalEvent.changedTouches && event.originalEvent.changedTouches[0]) || touches[0].originalEvent || touches[0];
                return {
                    "x": e.clientX,
                    "y": e.clientY
                };
            }, function(event) {
                var e;
                e = event;
                return {
                    "x": e.clientX,
                    "y": e.clientY
                };
            }
        ];

        getCoordinates = IsTouch ? getCoordinatesArray[0] : getCoordinatesArray[1];

        function Slip(ele, direction) {
            this.ele = ele;
            this.direction = direction;
            this._isPressed = false;
            this.onStart = this.onMove = this.onEnd = noop;
            this.coord = this.eventCoords = this.cacheCoords = this.finger = this.absFinger = NULL;
            this.orient = [];
            this.isSlider = false;
            this.isWebapp = false;
            this.duration = "400";
        }

        Slip.prototype.start = function(fn) {
            return (this.onStart = fn) && this;
        };

        Slip.prototype.move = function(fn) {
            return (this.onMove = fn) && this;
        };

        Slip.prototype.end = function(fn) {
            return (this.onEnd = fn) && this;
        };

        Slip.prototype.setCoord = function(userCoords) {
            var attr, coords, ele;
            coords = this.coord = {
                "x": userCoords[X] || 0,
                "y": userCoords[Y] || 0
            };
            ele = this.ele;
            setTranslate(ele, coords[X], coords[Y]);
            for (attr in coords) {
                ele.setAttribute(attr, coords[attr]);
            }
            return this;
        };

        Slip.prototype.onTouchStart = function(event) {
            var ret;
            this._isPressed = true;
            this.eventCoords = getCoordinates(event);
            this.cacheCoords = this.coord;
            this.finger = this.absFinger = NULL;
            if (this.isSlider) {
                this.onSliderStart(event);
            }
            return ret = this.onStart.apply(this, [event]);
        };

        Slip.prototype.onTouchMove = function(event) {
            var absFinger, attr, direction, ele, eleMove, finger, moveCoords, oppDirection, orient, ret, _results;
            event.preventDefault();
            if (!this._isPressed) {
                return false;
            }
            moveCoords = getCoordinates(event);
            direction = this.direction;
            finger = this.finger = {
                x: moveCoords.x - this.eventCoords.x,
                y: moveCoords.y - this.eventCoords.y
            };
            absFinger = this.absFinger = {
                x: Math.abs(finger.x),
                y: Math.abs(finger.y)
            };
            if (direction !== XY) {
                oppDirection = direction === X ? Y : X;
                if (absFinger[direction] < MIN_ALLOW_DISTANCE || absFinger[oppDirection] > MAX_OPP_ALLOW_DISTANCE) {
                    return false;
                }
            }
            orient = [];
            if (absFinger.x > MIN_ALLOW_DISTANCE) {
                orient.push(finger.x < 0 ? LEFT : RIGHT);
            }
            if (absFinger.y > MIN_ALLOW_DISTANCE) {
                orient.push(finger.y < 0 ? UP : DOWN);
            }
            this.orient = orient;
            ret = this.onMove.apply(this, [event]);
            if (ret === false) {
                return false;
            }
            ele = this.ele;
            eleMove = this.coord = {
                "x": direction.indexOf(X) < 0 ? this.cacheCoords[X] : this.cacheCoords[X] - 0 + finger.x,
                "y": direction.indexOf(Y) < 0 ? this.cacheCoords[Y] : this.cacheCoords[Y] - 0 + finger.y
            };
            setTranslate(ele, eleMove[X], eleMove[Y]);
            _results = [];
            for (attr in eleMove) {
                _results.push(ele.setAttribute(attr, eleMove[attr]));
            }
            return _results;
        };

        Slip.prototype.onTouchEnd = function(event) {
            var ele, trans;
            this._isPressed = false;
            ele = this.ele;
            if (this.isSlider) {
                this.onSliderEnd(event);
            }
            trans = getTranslate(this.ele);
            if (trans) {
                this.setCoord(trans);
            }
            return this.orient = [];
        };

        Slip.prototype.onSliderStart = function(event) {
            return setTransition(this.ele, NULL);
        };

        Slip.prototype.onSliderEnd = function(event, data) {
            var absFinger, duration, ele, isDown, isJump, isLeft, isOut, isRight, isUp, isVerticalWebapp, jumpPage, orient, page, pageNum, ret, trans;
            if (data == null) {
                data = {};
            }
            jumpPage = data.jumpPage;
            isJump = jumpPage;
            orient = this.orient.join("");
            trans = 0;
            isOut = false;
            page = this.page;
            pageNum = this.pageNum;
            ele = this.ele;
            duration = this.duration;
            absFinger = this.absFinger;
            isUp = orient.indexOf(UP) > -1;
            isDown = orient.indexOf(DOWN) > -1;
            isLeft = orient.indexOf(LEFT) > -1;
            isRight = orient.indexOf(RIGHT) > -1;
            isVerticalWebapp = this.direction === Y;
            if (jumpPage !== UNDEFINED) {
                page = jumpPage;
            } else {
                if (isVerticalWebapp) {
                    if (isUp) {
                        page++;
                    }
                    if (isDown) {
                        page--;
                    }
                } else {
                    if (isLeft) {
                        page++;
                    }
                    if (isRight) {
                        page--;
                    }
                }
            }
            if (page >= pageNum) {
                page = pageNum - 1;
                isOut = true;
            }
            if (page < 0) {
                page = 0;
                isOut = true;
            }
            if (isOut === true && !isJump) {
                duration *= isVerticalWebapp ? absFinger[Y] / this.pageHeight : absFinger[X] / this.pageWidth;
            }
            setTransition(ele, "all " + duration + "ms ease-in");
            if (isVerticalWebapp) {
                trans = "-" + (page * this.pageHeight);
                setTranslate(ele, 0, trans, 0);
            } else {
                trans = "-" + (page * this.pageWidth);
                setTranslate(ele, trans, 0, 0);
            }
            this.page = page;
            if (isJump) {
                this.onTouchEnd.call(this, NULL);
            }
            ret = this.onEnd.apply(this, [event]);
            return this;
        };

        Slip.prototype.init = function() {
            var attr, direction, ele, initMove, onTouchEnd, onTouchMove, onTouchStart;
            this.coord = {
                "x": 0,
                "y": 0
            };
            onTouchStart = this._onTouchStart = (function(_this) {
                return function(event) {
                    return _this.onTouchStart(event);
                };
            })(this);
            onTouchMove = this._onTouchMove = (function(_this) {
                return function(event) {
                    return _this.onTouchMove(event);
                };
            })(this);
            onTouchEnd = this._onTouchEnd = (function(_this) {
                return function(event) {
                    return _this.onTouchEnd(event);
                };
            })(this);
            ele = this.ele;
            ele.addEventListener(START_EVENT, onTouchStart, false);
            ele.addEventListener(MOVE_EVENT, onTouchMove, false);
            ele.addEventListener(END_EVENT, onTouchEnd, false);
            initMove = this.coord = {
                "x": 0,
                "y": 0
            };
            direction = this.direction;
            setTranslate(ele, initMove[X], initMove[Y]);
            for (attr in initMove) {
                ele.setAttribute(attr, initMove[attr]);
            }
            return this;
        };

        Slip.prototype.destroy = function() {
            var ele;
            ele = this.ele;
            ele.removeEventListener(START_EVENT, this._onTouchStart, false);
            ele.removeEventListener(MOVE_EVENT, this._onTouchMove, false);
            ele.removeEventListener(END_EVENT, this._onTouchEnd, false);
            return this;
        };

        Slip.prototype.slider = function(elPages) {
            var elChild, elChilds, elPage, elPagesLen, ele, pageNum, _i, _j, _len, _len1;
            ele = this.ele;
            if (typeof elPages === "string") {
                elPages = ele.querySelectorAll(elPages);
            } else if (!elPages) {
                elPages = [];
                elChilds = ele.childNodes;
                for (_i = 0, _len = elChilds.length; _i < _len; _i++) {
                    elChild = elChilds[_i];
                    if (elChild.nodeType === 1) {
                        elPages.push(elChild);
                    }
                }
            }
            this.isSlider = true;
            this.page = 0;
            this.elPages = elPages;
            elPagesLen = elPages.length;
            pageNum = this.pageNum = elPagesLen ? elPagesLen : 0;
            if (this.direction === X) {
                for (_j = 0, _len1 = elPages.length; _j < _len1; _j++) {
                    elPage = elPages[_j];
                    elPage.style.cssFloat = LEFT;
                }
            }
            return this;
        };

        Slip.prototype.webapp = function(elPages) {
            var ele, pageNum;
            this.isWebapp = true;
            this.slider(elPages).fullscreen();
            elPages = this.elPages;
            ele = this.ele;
            pageNum = this.pageNum;
            ele.style.height = "" + (WINDOW_HEIGHT * pageNum) + "px";
            this.height(WINDOW_HEIGHT);
            if (this.direction === X) {
                this.width(WINDOW_WIDTH);
            }
            return this;
        };

        Slip.prototype.height = function(num) {
            var elPage, elPages, ele, pageNum, _i, _len;
            ele = this.ele;
            elPages = this.elPages;
            pageNum = this.pageNum;
            num = String(num).replace("px", "");
            if (num === "100%") {
                num = WINDOW_HEIGHT;
            }
            this.pageHeight = num;
            if (this.direction === X) {
                ele.style.height = "" + num + "px";
            }
            for (_i = 0, _len = elPages.length; _i < _len; _i++) {
                elPage = elPages[_i];
                elPage.style.height = "" + num + "px";
            }
            return this;
        };

        Slip.prototype.width = function(num) {
            var elPage, elPages, ele, pageNum, _i, _len;
            ele = this.ele;
            elPages = this.elPages;
            pageNum = this.pageNum;
            num = String(num).replace("px", "");
            if (num === "100%") {
                num = WINDOW_WIDTH;
            }
            this.pageWidth = num;
            if (this.direction === X) {
                ele.style.width = "" + (num * pageNum) + "px";
            }
            for (_i = 0, _len = elPages.length; _i < _len; _i++) {
                elPage = elPages[_i];
                elPage.style.width = "" + num + "px";
            }
            return this;
        };

        Slip.prototype.fullscreen = function() {
            var child, ele, parent;
            ele = this.ele;
            child = ele;
            while (parent = child.parentNode) {
                if (parent.nodeType === 1) {
                    parent.style.height = "100%";
                    parent.style.overflow = "hidden";
                }
                child = parent;
            }
            return this;
        };

        Slip.prototype.time = function(duration) {
            this.duration = String(duration).replace("ms", "");
            return this;
        };

        Slip.prototype.jump = function(page) {
            this.onSliderEnd(NULL, {
                jumpPage: page
            });
            return this;
        };

        return Slip;

    })();
    entry = function(ele, direction) {
        var instance;
        instance = new Slip(ele, direction || X);
        return instance.init();
    };
    if (typeof define === "function") {
        return define("binnng/slip.js", function(require, exports, module) {
            return entry;
        });
    } else {
        return WIN["Slip"] = entry;
    }
})(window, document);