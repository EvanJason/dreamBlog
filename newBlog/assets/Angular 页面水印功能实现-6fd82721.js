const t={title:"Angular 页面水印功能实现",categories:["Angular"],tags:["水印","页面水印","Angular"],date:"2021-01-27",author:"深海如梦",excerpt:"Angular 页面水印功能实现"},e=`<h1>Angular 页面水印功能实现</h1>
<h4>html 使用</h4>
<pre><code class="language-html">&lt;div style=&quot;position: fixed;top: 0;left: 0;&quot;&gt;
  &lt;div *ngFor=&quot;let item of watermarkList&quot; class=&quot;watermarkList&quot;&gt;
      &lt;div [ngStyle]=&quot;item.objStyle&quot;&gt;
          {{item.txt}}
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h4>ts</h4>
<pre><code class="language-typescript">watermark(obj: { text: string; size: string }) {
    //默认设置
    let defaultSettings = {
        watermark_txt: obj.text,
        watermark_x: 20, //水印起始位置x轴坐标
        watermark_y: 20, //水印起始位置Y轴坐标
        watermark_rows: 100, //水印行数
        watermark_cols: 100, //水印列数
        watermark_color: &quot;#000000&quot;, //水印字体颜色
        watermark_alpha: 0.08, //水印透明度
        watermark_fontsize: obj.size, //水印字体大小
        watermark_font: &quot;微软雅黑&quot;, //水印字体
        watermark_angle: 45, //水印倾斜度数
        watermark_x_space: 10, //水印x轴间隔
        watermark_y_space: 60, //水印y轴间隔
        watermark_width: 130, //水印宽度
        watermark_height: 60, //水印长度
    };
    //采用配置项替换默认值，作用类似jquery.extend
    if (arguments.length === 1 &amp;&amp; typeof arguments[0] === &quot;object&quot;) {
        let src = arguments[0] || {};
        for (let key in src) {
            if (
                src[key] &amp;&amp;
                defaultSettings[key] &amp;&amp;
                src[key] === defaultSettings[key]
            )
                continue;
            else if (src[key]) defaultSettings[key] = src[key];
        }
    }

    let resList = [];
    // //获取页面最大宽度
    // let page_width = Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth);
    // //获取页面最大长度
    // let page_height = Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight);
    let page_width = document.body.offsetWidth + 1000;
    let page_height = document.body.offsetHeight + 1000;
    // console.log(page_width,page_height)

    //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (
        defaultSettings.watermark_cols === 0 ||
        defaultSettings.watermark_x +
        defaultSettings.watermark_width * defaultSettings.watermark_cols +
        defaultSettings.watermark_x_space *
        (defaultSettings.watermark_cols - 1) &gt;
        page_width
    ) {
        defaultSettings.watermark_cols =
            (page_width -
             defaultSettings.watermark_x +
             defaultSettings.watermark_x_space) /
            (defaultSettings.watermark_width + defaultSettings.watermark_x_space);
        defaultSettings.watermark_x_space =
            (page_width -
             defaultSettings.watermark_x -
             defaultSettings.watermark_width * defaultSettings.watermark_cols) /
            (defaultSettings.watermark_cols - 1);
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (
        defaultSettings.watermark_rows == 0 ||
        defaultSettings.watermark_y +
        defaultSettings.watermark_height * defaultSettings.watermark_rows +
        defaultSettings.watermark_y_space *
        (defaultSettings.watermark_rows - 1) &gt;
        page_height
    ) {
        defaultSettings.watermark_rows =
            (defaultSettings.watermark_y_space +
             page_height -
             defaultSettings.watermark_y) /
            (defaultSettings.watermark_height + defaultSettings.watermark_y_space);
        defaultSettings.watermark_y_space =
            (page_height -
             defaultSettings.watermark_y -
             defaultSettings.watermark_height * defaultSettings.watermark_rows) /
            (defaultSettings.watermark_rows - 1);
    }
    let x;
    let y;
    for (let i = 0; i &lt; defaultSettings.watermark_rows; i++) {
        y =
            defaultSettings.watermark_y +
            (defaultSettings.watermark_y_space + defaultSettings.watermark_height) *
            i;
        for (let j = 0; j &lt; defaultSettings.watermark_cols; j++) {
            x =
                defaultSettings.watermark_x +
                (defaultSettings.watermark_width +
                 defaultSettings.watermark_x_space) *
                j;
            // 水印对象和样式
            let mask_div = {
                style: &quot;&quot;,
                txt: &quot;&quot;,
            };
            mask_div.txt = defaultSettings.watermark_txt;
            // console.log(j);
            //设置水印div倾斜显示
            mask_div.style = JSON.stringify({
                &quot;pointer-events&quot;: &quot;none&quot;,
                &quot;-webkit-transform&quot;:
                &quot;rotate(-&quot; + defaultSettings.watermark_angle + &quot;deg)&quot;,
                &quot;-moz-transform&quot;:
                &quot;rotate(-&quot; + defaultSettings.watermark_angle + &quot;deg)&quot;,
                &quot;-ms-transform&quot;:
                &quot;rotate(-&quot; + defaultSettings.watermark_angle + &quot;deg)&quot;,
                &quot;-o-transform&quot;: &quot;rotate(-&quot; + defaultSettings.watermark_angle + &quot;deg)&quot;,
                transform: &quot;rotate(-&quot; + defaultSettings.watermark_angle + &quot;deg)&quot;,
                position: &quot;absolute&quot;,
                left: x + &quot;px&quot;,
                top: y + &quot;px&quot;,
                overflow: &quot;hidden&quot;,
                &quot;z-index&quot;: &quot;9&quot;,
                opacity: defaultSettings.watermark_alpha,
                &quot;font-size&quot;: defaultSettings.watermark_fontsize,
                &quot;font-family&quot;: defaultSettings.watermark_font,
                color: defaultSettings.watermark_color,
                &quot;text-align&quot;: &quot;left&quot;,
                width: defaultSettings.watermark_width + &quot;px&quot;,
                height: defaultSettings.watermark_height + &quot;px&quot;,
                display: &quot;block&quot;,
            });
            resList = resList.concat(mask_div);
        }
    }
    return resList;
}
</code></pre>
<h4>css</h4>
<pre><code class="language-css">.watermark{
  pointer-events:none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  -webkit-transform: rotate(18deg) translate3d(50px,-200px,0);
  -moz-transform: rotate(18deg) translate3d(50px,-200px,0);
  -ms-transform: rotate(18deg) translate3d(50px,-200px,0);
  -o-transform: rotate(18deg) translate3d(50px,-200px,0);
  transform: rotate(18deg) translate3d(50px,-200px,0);
}
</code></pre>
<h4>ngOnInit()</h4>
<pre><code class="language-typescript">// 加水印
watermarkList = [];
ngOnInit(){
    setTimeout(() =&gt; {
        setInterval(() =&gt; {
            let obj = { text:'测试测试', size: &quot;18px&quot;};
            this.watermarkList = this.commonService.watermark(obj);
            for (let item of this.watermarkList) {
                let style = JSON.parse(item.style);
                // json字符串转换为json对象，因为ngStyle只支持对象
                item.objStyle = style;
            }
        }, 1000);
	}, 1000);
}

</code></pre>
<h2>效果图</h2>
<p><a href="https://willern.gitee.io/2021/01/27/20210127/water-mark.png"><img src="https://willern.gitee.io/2021/01/27/20210127/water-mark.png" alt="img"></a></p>
`;export{t as attributes,e as html};
