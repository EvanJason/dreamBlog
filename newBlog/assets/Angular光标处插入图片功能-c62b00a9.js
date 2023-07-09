const t={title:"Angular光标处插入图片功能",categories:["Angular"],tags:["插入功能","光标处","聚焦"],date:"2021-09-20",author:"深海如梦",excerpt:"Angular光标处插入图片功能"},n=`<h1>Angular 光标处插入图片功能</h1>
<p>背景：在项目中，存在图片管理和可编辑的 md 插件，可以实现编写 md 文档，原先的图片管理插入图片是无脑在文档字符串最后面加的图片(Angular 框架下)
需求：现在需要在聚焦状态下的光标处插入，这样比较合理</p>
<h2>方法</h2>
<pre><code class="language-typescript">/**
 * 获取聚焦状态下光标处下标
 * @param htmlElement input或textarea元素
 * @returns
 */
export const getSelectedText = (htmlElement: any) =&gt; {
	let curPos = 0;
	if (typeof htmlElement.selectionStart === 'number') {
		// 非IE浏览器
		curPos = htmlElement.selectionStart; // 获取选区的开始位置
		// console.log(&quot;选区开始点：&quot; + curPos)
	}
	return curPos;
};

/**
 * 光标处插入事件
 * @param str 原字符串
 * @param insert 要插入的东西
 * @param pos 插入的位置下标
 * @returns
 */
export const insert_flg = (str: string, insert: string, pos: number) =&gt; {
	let newstr = '';
	if (str &amp;&amp; pos &gt; -1 &amp;&amp; pos !== 0) {
		let arr = str.split('');
		arr[pos - 1] = arr[pos - 1] + insert;
		newstr = arr.join('');
	} else if (str &amp;&amp; pos === 0) {
		newstr = insert + str;
	} else {
		newstr = str + insert;
	}
	return newstr;
};
</code></pre>
<h2>实现步骤</h2>
<h4>html 代码</h4>
<pre><code class="language-html">&lt;textarea id=&quot;textcontainer&quot; nz-input [ngModel]=&quot;mdContent&quot; (keyup)=&quot;keyUpEvent($event)&quot; (blur)=&quot;blurEvent($event)&quot;&gt;&lt;/textarea&gt;
</code></pre>
<p>ts 代码</p>
<pre><code class="language-typescript">//一、在输入框中进行监听

/**
* 监听输入框状态改变
* @param e
*/
keyUpEvent(e: any) {
    let editContent = document.getElementById('textcontainer'); // 获取input 或 textarea 的元素
    if(editContent){
        let curPos = getSelectedText(editContent);
        Global.curPos = curPos; //用一个值来保存当前聚焦状态下光标处的下标值
    }

}
/**
* 监听输入框失焦事件
* @param e
*/
blurEvent(e:any){
    this.keyUpEvent(e);
}

//二、使用

Global.curPos 初始化应该为-1,这样才不会有问题
/*
origin 原先的内容
insertData 要插入的内容
Global.curPos 光标下标值
*/
insert_flg(origin,insertData,Global.curPos);
</code></pre>
`;export{t as attributes,n as html};
