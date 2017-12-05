/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-03 16:00:29
 * @version $Id$
 */

 $(document).ready(function() {
    // $('.btn_beginTest').burn();
});

function getMustIndex($arr) {
	// body...
	var countA = 0;
	var countB = 0;
	var countC = 0;
	var mustIndex;
	for(var i = 0; i < $arr.length; i++){
		if($arr[i] == 'A'){
			countA++;
		}else if($arr[i] == 'B'){
			countB++;
		}else {
			countC++;
		}
	}
	var tArr = [{'count':countA,
                 'index':'A'},
                 {'count':countB,
                 'index':'B'},
                 {'count':countC,
                 'index':'C'}];
    /**
    *冒泡倒排序desc
    */             
	for(var i = 0; i < tArr.length - 1; i++){
		for(var j = 0; j < tArr.length - i - 1; j++){
			if(tArr[j].count < tArr[j+1].count){
				var temp = tArr[j+1];
				tArr[j+1] = tArr[j];
				tArr[j] = temp;
			}
		}
	}
	return tArr[0].index;
}
