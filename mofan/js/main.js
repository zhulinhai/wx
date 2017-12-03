/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-03 16:00:29
 * @version $Id$
 */

function statistics($arr) {
	// body...
	var countA = 0;
	var countB = 0;
	var countC = 0;
	for(var i = 0; i < $arr.length; i++){
		if($arr[i] == 'A'){
			countA++;
		}else if($arr[i] == 'B'){
			countB++;
		}else {
			countC++;
		}
	}
	return {'A': countA,'B':countB,'C':countC};
}
