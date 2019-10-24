//実際の処理
function btn_click(){
	window.alert('ボタンがクリックされました。');
}

//ページロード時に実行されるイベントハンドラーを登録
window.onload = function() {
	//ボタン(btn)クリック時に実行されるイベントハンドラーを登録
	document.getElementById('btn').onclick = function(){
		window.alert('ボタンがクリックされました!!');
	}
};

//ページロード時に実行されるイベントリスナーを登録
document.addEventListener('DOMContentLoaded',function(){
	//ボタン(btn)クリック時に実行ｓあれるイベントリスナーを登録
	document.getElementById('btn2').addEventListener('click', function(){
		window.alert('ボタンがクリックされました。')
	}, false);
}, false);