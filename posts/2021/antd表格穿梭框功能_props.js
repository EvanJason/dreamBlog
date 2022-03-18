import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/2021/antd表格穿梭框功能.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021/antd表格穿梭框功能.html",
    'title': "antd表格穿梭框功能",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>antd表格穿梭框功能</h1>\n<h4 id="html">html<a class="anchor" href="#html">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode color">#ffffff</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-form-item</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">0</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-form-label</span> <span class="token attr-name">[nzSm]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">[nzXs]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关联知识<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-form-label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">nz-col</span> <span class="token attr-name">[nzSm]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span> <span class="token attr-name">[nzXs]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-table</span> <span class="token attr-name">#basicTable</span> <span class="token attr-name">nzBordered</span> <span class="token attr-name">[nzData]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>listOfData<span class="token punctuation">"</span></span> <span class="token attr-name">[nzFrontPagination]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>  <span class="token attr-name">nzShowPagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">nzScroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ x: <span class="token punctuation">\'</span>300px<span class="token punctuation">\'</span>, y: <span class="token punctuation">\'</span>300px<span class="token punctuation">\'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>知识名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let data of basicTable.data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{data.knowledgeTitle || \'-\'}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-table</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token comment">&lt;!-- 添加关联知识 --></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">nz-button</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openKnowledge()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>编辑关联知识<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-form-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-modal</span> <span class="token attr-name">nzClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>knowledge<span class="token punctuation">"</span></span> <span class="token attr-name">nzWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800px<span class="token punctuation">"</span></span> <span class="token attr-name">[(nzVisible)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isVisible<span class="token punctuation">"</span></span> <span class="token attr-name">[nzTitle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ass_title<span class="token punctuation">"</span></span> <span class="token attr-name">(nzOnCancel)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCancel()<span class="token punctuation">"</span></span> <span class="token attr-name">(nzOnOk)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleOk()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span><span class="token property">max-height</span><span class="token punctuation">:</span> <span class="token number">650</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- 穿梭框 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataList.length !==0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferDisabled === true<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eloading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span><span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">-50</span><span class="token unit">%</span><span class="token punctuation">,</span><span class="token number">-50</span><span class="token unit">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span> <span class="token attr-name">nzTheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>注：关联知识最多选择5条!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-transfer</span>\n        <span class="token attr-name">[nzDataSource]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataList<span class="token punctuation">"</span></span>\n        <span class="token attr-name">[nzShowSelectAll]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>\n        <span class="token attr-name">[nzRenderList]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[renderList, renderList, renderList]<span class="token punctuation">"</span></span>\n        <span class="token attr-name">(nzSelectChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferSelect($event)<span class="token punctuation">"</span></span>\n        <span class="token attr-name">(nzChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferChange($event)<span class="token punctuation">"</span></span>\n        <span class="token attr-name">nzShowSearch</span>\n        <span class="token attr-name">nzSearchPlaceholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入搜索内容<span class="token punctuation">"</span></span>\n        <span class="token attr-name">[nzFilterOption]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filterOption<span class="token punctuation">"</span></span>\n        <span class="token attr-name">(nzSearchChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferSearch($event)<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span>\n          <span class="token attr-name">#renderList</span>\n          <span class="token attr-name">let-items</span>\n          <span class="token attr-name">let-direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>direction<span class="token punctuation">"</span></span>\n          <span class="token attr-name">let-stat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stat<span class="token punctuation">"</span></span>\n          <span class="token attr-name">let-onItemSelectAll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelectAll<span class="token punctuation">"</span></span>\n          <span class="token attr-name">let-onItemSelect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelect<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-table</span> <span class="token attr-name">#t</span> <span class="token attr-name">[nzData]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>convertItems(items)<span class="token punctuation">"</span></span> <span class="token attr-name">nzSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span>\n                  <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stat.checkAll<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">[nzIndeterminate]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stat.checkHalf<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelectAll($event)<span class="token punctuation">"</span></span>\n                <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">nzWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>问题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let data of t.data<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelect(data)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span>\n                  <span class="token attr-name">nzShowCheckbox</span>\n                  <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data.checked<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelect(data)<span class="token punctuation">"</span></span>\n                <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">nzWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ data.knowledgeTitle }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-table</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-transfer</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-empty</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataList.length ===0<span class="token punctuation">"</span></span> <span class="token attr-name">nzNotFoundContent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>暂无数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-empty</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-modal</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>ts</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NzMessageService<span class="token punctuation">,</span> TransferItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ng-zorro-antd\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">\'app-shuttleBox\'</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">\'./shuttleBox.component.html\'</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./shuttleBox.component.css\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ShuttleBoxComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span>\n    <span class="token keyword">private</span> router<span class="token operator">:</span> Router<span class="token punctuation">,</span>\n    <span class="token keyword">private</span> message<span class="token operator">:</span> NzMessageService\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token comment">// 关联知识</span>\n  listOfData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">// 显示对话框</span>\n  isVisible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  ass_title <span class="token operator">=</span> <span class="token string">\'关联知识\'</span><span class="token punctuation">;</span>\n  <span class="token comment">// 一级分类名</span>\n  gameValue <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n  gameList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">// 穿梭框列表</span>\n  dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'终身卡没有到账的\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'&lt;p>先确认下个人中心里面是否有补单显示，有的话自行操作补单即可哦；如果没有个人中心的，可以重新拉起下对应充值的档位（不需要再次支付哦）然后重启手机重新进入游戏即可；还是没有解决的可以提供充值扣费的订单联系客服反馈哦！&lt;/p>\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'2538\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'啊虽然大家喀什地方\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'&lt;p>先确认下个人中心里面是否有补单显示，有的话自行操作补单即可哦；如果没有个人中心的，可以重新拉起下对应充值的档位（不需要再次支付哦）然后重启手机重新进入游戏即可；还是没有解决的可以提供充值扣费的订单联系客服反馈哦！&lt;/p>\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'2538\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'如何获得兑换码\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'兑换码需要小主关注微信公众号：花之舞H5（有时候会有兑换码的文章推送即可得到），或者在花之舞论坛领取哦，会不定时更新的\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1154\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'如何获得请帖\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span> <span class="token string">\'商城购买或者活动获取哦\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1153\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'提升情谊需要的道具,以及知己的属性怎么获得?\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'飞鸽传书可以提升知己的属性,皇家苑囿右下角的积分兑换可以兑换提升知己属性和情谊的道具\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1152\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'为什么提升知己的情谊增加的势力与显示的不同?\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'提升情谊等级增加的势力已包括前一等级情谊所增加的势力,因此需要扣除前一等级情谊所增加的势力\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1151\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  transferDisabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token comment">// 穿梭框，传过来的值</span>\n  transferRightList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  title <span class="token operator">=</span> <span class="token string">\'新增知识\'</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 打开关联知识</span>\n  <span class="token function">openKnowledge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>isVisible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// // this.assValue = undefined;</span>\n    <span class="token comment">// if (this.title === \'编辑知识\') {</span>\n    <span class="token comment">//   // 关联知识对话框的一级分类</span>\n    <span class="token comment">//   this.transferDisabled = true;</span>\n    <span class="token comment">//   // 1.把选中的关联知识列表赋值到穿梭框右边</span>\n    <span class="token comment">//   // 2.获取所有一级分类的所有问题</span>\n    <span class="token comment">//   console.log(this.dataList);</span>\n\n    <span class="token comment">//   for (const item of this.dataList) {</span>\n    <span class="token comment">//     for (const j of this.listOfData) {</span>\n    <span class="token comment">//       if (j.knowledgeId === item.knowledgeId) {</span>\n    <span class="token comment">//         item.direction = \'right\';</span>\n    <span class="token comment">//       }</span>\n    <span class="token comment">//     }</span>\n    <span class="token comment">//   }</span>\n    <span class="token comment">// }</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 关联知识确认</span>\n  <span class="token function">handleOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>isVisible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>listOfData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 关联知识取消</span>\n  <span class="token function">handleCancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'Button cancel clicked!\');</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>isVisible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'新增知识\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>gameValue <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">convertItems</span><span class="token punctuation">(</span>items<span class="token operator">:</span> TransferItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TransferItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>i<span class="token punctuation">.</span>hide<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">filterOption</span><span class="token punctuation">(</span>inputValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> item<span class="token punctuation">.</span>knowledgeTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 选择的回调函数</span>\n  <span class="token function">transferSelect</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'transferSelect\', event);</span>\n    <span class="token keyword">let</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>list<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(this.transferRightList.length)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">\'left\'</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">.</span>length <span class="token operator">+</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'warning\'</span><span class="token punctuation">,</span> <span class="token string">\'关联知识不超过5个\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              item<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 穿梭框，传过来的值</span>\n  <span class="token function">transferChange</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'transferChange\',event);</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token keyword">from</span> <span class="token operator">===</span> <span class="token string">\'left\'</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">\'right\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> newData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">,</span> <span class="token operator">...</span>event<span class="token punctuation">.</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>newData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// console.log(arr1)</span>\n      <span class="token keyword">let</span> selectData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'新增知识\'</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">\'right\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            selectData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'编辑知识\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            selectData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList <span class="token operator">=</span> selectData<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> index<span class="token punctuation">,</span> self<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> arrids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        newData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          arrids<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> arrids<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span> <span class="token operator">===</span> index<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token comment">// console.log(this.transferRightList)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token keyword">from</span> <span class="token operator">===</span> <span class="token string">\'right\'</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">\'left\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span>\n        event<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span> <span class="token operator">=></span> ele<span class="token punctuation">.</span>knowledgeId <span class="token operator">!==</span> item<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// console.log(arr1)</span>\n      <span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'新增知识\'</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">\'right\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'编辑知识\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> j <span class="token keyword">of</span> event<span class="token punctuation">.</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>knowledgeId <span class="token operator">===</span> j<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              item<span class="token punctuation">.</span>direction <span class="token operator">=</span> <span class="token string">\'left\'</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>direction <span class="token operator">!==</span> <span class="token string">\'left\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList <span class="token operator">=</span> arr2<span class="token punctuation">;</span>\n      <span class="token comment">// console.log(this.transferRightList)</span>\n      <span class="token comment">// console.log(this.listOfData)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// this.listOfData = this.transferRightList</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 穿梭框搜索的查询</span>\n  <span class="token function">transferSearch</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'transferSearch\', event);</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre>\n<p>css</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token pseudo-element">::ng-deep</span> <span class="token class">.cdk-overlay-pane</span> <span class="token class">.knowledge</span><span class="token combinator">></span><span class="token combinator">></span><span class="token combinator">></span><span class="token class">.ant-modal-body</span></span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">15</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre>'
        } }),
    'head': React.createElement("link", { href: "https://willern.gitee.io/img/favicon.ico", rel: "shortcut icon" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "antd\u8868\u683C\u7A7F\u68AD\u6846\u529F\u80FD"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="html">html<a class="anchor" href="#html">§</a></h4>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode color">#ffffff</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-form-item</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">0</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-form-label</span> <span class="token attr-name">[nzSm]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">[nzXs]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关联知识<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-form-label</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">nz-col</span> <span class="token attr-name">[nzSm]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span> <span class="token attr-name">[nzXs]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-table</span> <span class="token attr-name">#basicTable</span> <span class="token attr-name">nzBordered</span> <span class="token attr-name">[nzData]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>listOfData<span class="token punctuation">"</span></span> <span class="token attr-name">[nzFrontPagination]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>  <span class="token attr-name">nzShowPagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">nzScroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ x: <span class="token punctuation">\'</span>300px<span class="token punctuation">\'</span>, y: <span class="token punctuation">\'</span>300px<span class="token punctuation">\'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>知识名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let data of basicTable.data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{data.knowledgeTitle || \'-\'}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-table</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token comment">&lt;!-- 添加关联知识 --></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">nz-button</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openKnowledge()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>编辑关联知识<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-form-item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-modal</span> <span class="token attr-name">nzClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>knowledge<span class="token punctuation">"</span></span> <span class="token attr-name">nzWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800px<span class="token punctuation">"</span></span> <span class="token attr-name">[(nzVisible)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isVisible<span class="token punctuation">"</span></span> <span class="token attr-name">[nzTitle]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ass_title<span class="token punctuation">"</span></span> <span class="token attr-name">(nzOnCancel)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCancel()<span class="token punctuation">"</span></span> <span class="token attr-name">(nzOnOk)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleOk()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span><span class="token property">max-height</span><span class="token punctuation">:</span> <span class="token number">650</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- 穿梭框 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataList.length !==0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferDisabled === true<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eloading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">;</span><span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">-50</span><span class="token unit">%</span><span class="token punctuation">,</span><span class="token number">-50</span><span class="token unit">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token unit">px</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">nzType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span> <span class="token attr-name">nzTheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>注：关联知识最多选择5条!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-transfer</span>\n        <span class="token attr-name">[nzDataSource]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataList<span class="token punctuation">"</span></span>\n        <span class="token attr-name">[nzShowSelectAll]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>\n        <span class="token attr-name">[nzRenderList]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[renderList, renderList, renderList]<span class="token punctuation">"</span></span>\n        <span class="token attr-name">(nzSelectChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferSelect($event)<span class="token punctuation">"</span></span>\n        <span class="token attr-name">(nzChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferChange($event)<span class="token punctuation">"</span></span>\n        <span class="token attr-name">nzShowSearch</span>\n        <span class="token attr-name">nzSearchPlaceholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入搜索内容<span class="token punctuation">"</span></span>\n        <span class="token attr-name">[nzFilterOption]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filterOption<span class="token punctuation">"</span></span>\n        <span class="token attr-name">(nzSearchChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferSearch($event)<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span>\n          <span class="token attr-name">#renderList</span>\n          <span class="token attr-name">let-items</span>\n          <span class="token attr-name">let-direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>direction<span class="token punctuation">"</span></span>\n          <span class="token attr-name">let-stat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stat<span class="token punctuation">"</span></span>\n          <span class="token attr-name">let-onItemSelectAll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelectAll<span class="token punctuation">"</span></span>\n          <span class="token attr-name">let-onItemSelect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelect<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-table</span> <span class="token attr-name">#t</span> <span class="token attr-name">[nzData]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>convertItems(items)<span class="token punctuation">"</span></span> <span class="token attr-name">nzSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span>\n                  <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stat.checkAll<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">[nzIndeterminate]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stat.checkHalf<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelectAll($event)<span class="token punctuation">"</span></span>\n                <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">nzWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>问题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let data of t.data<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelect(data)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span>\n                  <span class="token attr-name">nzShowCheckbox</span>\n                  <span class="token attr-name">[nzChecked]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data.checked<span class="token punctuation">"</span></span>\n                  <span class="token attr-name">(nzCheckedChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onItemSelect(data)<span class="token punctuation">"</span></span>\n                <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">nzAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">nzWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ data.knowledgeTitle }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-table</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-transfer</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nz-empty</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataList.length ===0<span class="token punctuation">"</span></span> <span class="token attr-name">nzNotFoundContent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>暂无数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-empty</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nz-modal</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>ts</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NzMessageService<span class="token punctuation">,</span> TransferItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'ng-zorro-antd\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">\'app-shuttleBox\'</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">\'./shuttleBox.component.html\'</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./shuttleBox.component.css\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ShuttleBoxComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span>\n    <span class="token keyword">private</span> router<span class="token operator">:</span> Router<span class="token punctuation">,</span>\n    <span class="token keyword">private</span> message<span class="token operator">:</span> NzMessageService\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token comment">// 关联知识</span>\n  listOfData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">// 显示对话框</span>\n  isVisible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  ass_title <span class="token operator">=</span> <span class="token string">\'关联知识\'</span><span class="token punctuation">;</span>\n  <span class="token comment">// 一级分类名</span>\n  gameValue <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n  gameList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">// 穿梭框列表</span>\n  dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'终身卡没有到账的\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'&lt;p>先确认下个人中心里面是否有补单显示，有的话自行操作补单即可哦；如果没有个人中心的，可以重新拉起下对应充值的档位（不需要再次支付哦）然后重启手机重新进入游戏即可；还是没有解决的可以提供充值扣费的订单联系客服反馈哦！&lt;/p>\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'2538\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'啊虽然大家喀什地方\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'&lt;p>先确认下个人中心里面是否有补单显示，有的话自行操作补单即可哦；如果没有个人中心的，可以重新拉起下对应充值的档位（不需要再次支付哦）然后重启手机重新进入游戏即可；还是没有解决的可以提供充值扣费的订单联系客服反馈哦！&lt;/p>\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'2538\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'如何获得兑换码\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'兑换码需要小主关注微信公众号：花之舞H5（有时候会有兑换码的文章推送即可得到），或者在花之舞论坛领取哦，会不定时更新的\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1154\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'如何获得请帖\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span> <span class="token string">\'商城购买或者活动获取哦\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1153\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'提升情谊需要的道具,以及知己的属性怎么获得?\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'飞鸽传书可以提升知己的属性,皇家苑囿右下角的积分兑换可以兑换提升知己属性和情谊的道具\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1152\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      knowledgeTitle<span class="token operator">:</span> <span class="token string">\'为什么提升知己的情谊增加的势力与显示的不同?\'</span><span class="token punctuation">,</span>\n      knowledgeContent<span class="token operator">:</span>\n        <span class="token string">\'提升情谊等级增加的势力已包括前一等级情谊所增加的势力,因此需要扣除前一等级情谊所增加的势力\'</span><span class="token punctuation">,</span>\n      knowledgeStatus<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      toppingType<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      knowledgeId<span class="token operator">:</span> <span class="token string">\'1151\'</span><span class="token punctuation">,</span>\n      robotNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      visitNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      likeNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      helpfulNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      uselessNum<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      direction<span class="token operator">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n      checked<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  transferDisabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token comment">// 穿梭框，传过来的值</span>\n  transferRightList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  title <span class="token operator">=</span> <span class="token string">\'新增知识\'</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 打开关联知识</span>\n  <span class="token function">openKnowledge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>isVisible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// // this.assValue = undefined;</span>\n    <span class="token comment">// if (this.title === \'编辑知识\') {</span>\n    <span class="token comment">//   // 关联知识对话框的一级分类</span>\n    <span class="token comment">//   this.transferDisabled = true;</span>\n    <span class="token comment">//   // 1.把选中的关联知识列表赋值到穿梭框右边</span>\n    <span class="token comment">//   // 2.获取所有一级分类的所有问题</span>\n    <span class="token comment">//   console.log(this.dataList);</span>\n\n    <span class="token comment">//   for (const item of this.dataList) {</span>\n    <span class="token comment">//     for (const j of this.listOfData) {</span>\n    <span class="token comment">//       if (j.knowledgeId === item.knowledgeId) {</span>\n    <span class="token comment">//         item.direction = \'right\';</span>\n    <span class="token comment">//       }</span>\n    <span class="token comment">//     }</span>\n    <span class="token comment">//   }</span>\n    <span class="token comment">// }</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 关联知识确认</span>\n  <span class="token function">handleOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>isVisible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>listOfData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 关联知识取消</span>\n  <span class="token function">handleCancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'Button cancel clicked!\');</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>isVisible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'新增知识\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>gameValue <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">convertItems</span><span class="token punctuation">(</span>items<span class="token operator">:</span> TransferItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> TransferItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>i<span class="token punctuation">.</span>hide<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">filterOption</span><span class="token punctuation">(</span>inputValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> item<span class="token punctuation">.</span>knowledgeTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 选择的回调函数</span>\n  <span class="token function">transferSelect</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'transferSelect\', event);</span>\n    <span class="token keyword">let</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>list<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// console.log(this.transferRightList.length)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">\'left\'</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>checked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">.</span>length <span class="token operator">+</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'warning\'</span><span class="token punctuation">,</span> <span class="token string">\'关联知识不超过5个\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataList<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              item<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 穿梭框，传过来的值</span>\n  <span class="token function">transferChange</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'transferChange\',event);</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token keyword">from</span> <span class="token operator">===</span> <span class="token string">\'left\'</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">\'right\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> newData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">,</span> <span class="token operator">...</span>event<span class="token punctuation">.</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>newData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// console.log(arr1)</span>\n      <span class="token keyword">let</span> selectData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'新增知识\'</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">\'right\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            selectData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'编辑知识\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            selectData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList <span class="token operator">=</span> selectData<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> index<span class="token punctuation">,</span> self<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> arrids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        newData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          arrids<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> arrids<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span> <span class="token operator">===</span> index<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token comment">// console.log(this.transferRightList)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token keyword">from</span> <span class="token operator">===</span> <span class="token string">\'right\'</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">\'left\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span>\n        event<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span> <span class="token operator">=></span> ele<span class="token punctuation">.</span>knowledgeId <span class="token operator">!==</span> item<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token comment">// console.log(arr1)</span>\n      <span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'新增知识\'</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>direction <span class="token operator">===</span> <span class="token string">\'right\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">\'编辑知识\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> j <span class="token keyword">of</span> event<span class="token punctuation">.</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>knowledgeId <span class="token operator">===</span> j<span class="token punctuation">.</span>knowledgeId<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              item<span class="token punctuation">.</span>direction <span class="token operator">=</span> <span class="token string">\'left\'</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>direction <span class="token operator">!==</span> <span class="token string">\'left\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">this</span><span class="token punctuation">.</span>transferRightList <span class="token operator">=</span> arr2<span class="token punctuation">;</span>\n      <span class="token comment">// console.log(this.transferRightList)</span>\n      <span class="token comment">// console.log(this.listOfData)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// this.listOfData = this.transferRightList</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 穿梭框搜索的查询</span>\n  <span class="token function">transferSearch</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token comment">// console.log(\'transferSearch\', event);</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre>\n<p>css</p>\n<pre class="language-css"><code class="language-css"><span class="token selector"><span class="token pseudo-element">::ng-deep</span> <span class="token class">.cdk-overlay-pane</span> <span class="token class">.knowledge</span><span class="token combinator">></span><span class="token combinator">></span><span class="token combinator">></span><span class="token class">.ant-modal-body</span></span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token unit">px</span> <span class="token number">5</span><span class="token unit">px</span> <span class="token number">15</span><span class="token unit">px</span> <span class="token number">0</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre>'
        } }),
    'toc': null,
    'author': "深海如梦",
    'contributors': [
        "EvanJason"
    ],
    'date': "2021/05/15",
    'updated': null,
    'excerpt': "angular-antd穿梭框功能实现",
    'cover': undefined,
    'categories': [
        "antd",
        "Angular"
    ],
    'tags': [
        "antd",
        "穿梭框",
        "表格"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/2022/React-Antd表格选中行事件.md",
                "title": "antd表格选中行事件",
                "link": "posts/2022/React-Antd表格选中行事件.html",
                "date": "2023/03/10",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React",
                    "Antd"
                ],
                "tags": [
                    "React",
                    "Antd"
                ],
                "excerpt": "antd表格选中行事件"
            },
            {
                "pagePath": "posts/2022/React-Echarts图表点击事件.md",
                "title": "echarts图表点击事件",
                "link": "posts/2022/React-Echarts图表点击事件.html",
                "date": "2023/02/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React",
                    "ECharts"
                ],
                "tags": [
                    "React",
                    "ECharts"
                ],
                "excerpt": "echarts图表点击事件"
            },
            {
                "pagePath": "posts/2021/2021年总结 + 新的一年目标和规划.md",
                "title": "2021年总结 + 新的一年目标和规划",
                "link": "posts/2021/2021年总结 + 新的一年目标和规划.html",
                "date": "2021/12/31",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "日常生活",
                    "年终总结"
                ],
                "tags": [
                    "日常生活",
                    "年终总结"
                ],
                "excerpt": "2021年总结 + 新的一年目标和规划",
                "cover": "../../pic/finish/4d03-a370d991827003abcad4040bdd0349dd.png"
            },
            {
                "pagePath": "posts/2021/解决react项目生产环境部署，浏览器可以看到源码的问题.md",
                "title": "解决 react 项目生产环境部署，浏览器可以看到源码的问题",
                "link": "posts/2021/解决react项目生产环境部署，浏览器可以看到源码的问题.html",
                "date": "2021/11/21",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "React",
                    "打包"
                ],
                "excerpt": "React生产环境还有源代码的问题解决,并记录"
            },
            {
                "pagePath": "posts/2021/localstorage和sessionstorage的封装.md",
                "title": "localstorage 和 sessionstorage 的封装",
                "link": "posts/2021/localstorage和sessionstorage的封装.html",
                "date": "2021/10/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "localstorage",
                    "sessionstorage"
                ],
                "excerpt": "localstorage和sessionstorage的封装"
            },
            {
                "pagePath": "posts/2021/Angular表格自定义列配置.md",
                "title": "Angular 表格自定义列配置",
                "link": "posts/2021/Angular表格自定义列配置.html",
                "date": "2021/10/10",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "表格",
                    "自定义"
                ],
                "excerpt": "Angular表格自定义列配置"
            },
            {
                "pagePath": "posts/2021/Angular光标处插入图片功能.md",
                "title": "Angular 光标处插入图片功能",
                "link": "posts/2021/Angular光标处插入图片功能.html",
                "date": "2021/09/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "插入功能",
                    "光标处",
                    "聚焦"
                ],
                "excerpt": "Angular光标处插入图片功能"
            },
            {
                "pagePath": "posts/2021/通用水印功能实现.md",
                "title": "通用水印功能实现",
                "link": "posts/2021/通用水印功能实现.html",
                "date": "2021/08/16",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "水印"
                ],
                "tags": [
                    "水印",
                    "页面水印"
                ],
                "excerpt": "新的水印功能实现"
            },
            {
                "pagePath": "posts/2021/语言代码表.md",
                "title": "语言代码表",
                "link": "posts/2021/语言代码表.html",
                "date": "2021/07/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "工具"
                ],
                "tags": [
                    "语言代码表"
                ],
                "excerpt": "语言代码表"
            },
            {
                "pagePath": "posts/2021/使用react-router-cache-route实现页面状态的缓存.md",
                "title": "使用react-router-cache-route实现页面状态的缓存",
                "link": "posts/2021/使用react-router-cache-route实现页面状态的缓存.html",
                "date": "2021/07/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "React"
                ],
                "tags": [
                    "React",
                    "缓存"
                ],
                "excerpt": "使用react-router-cache-route实现页面状态的缓存"
            },
            {
                "pagePath": "posts/2021/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/2021/数组的深浅拷贝.html",
                "date": "2021/06/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "tags": [
                    "深浅拷贝"
                ],
                "excerpt": "数组的深浅拷贝"
            },
            {
                "pagePath": "posts/2021/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
                "title": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
                "link": "posts/2021/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
                "date": "2021/05/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "webpack"
                ],
                "tags": [
                    "webpack"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/2021/vscode快捷键.md",
                "title": "vscode 快捷键",
                "link": "posts/2021/vscode快捷键.html",
                "date": "2021/05/25",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "工具"
                ],
                "tags": [
                    "vscode",
                    "快捷键"
                ],
                "excerpt": "vscode快捷键"
            },
            {
                "pagePath": "posts/2021/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/2021/antd表格穿梭框功能.html",
                "date": "2021/05/15",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "穿梭框",
                    "表格"
                ],
                "excerpt": "angular-antd穿梭框功能实现"
            },
            {
                "pagePath": "posts/2021/Vs Code 前端常用插件.md",
                "title": "前端常用插件",
                "link": "posts/2021/Vs Code 前端常用插件.html",
                "date": "2021/05/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "vscode"
                ],
                "tags": [
                    "vscode",
                    "插件"
                ],
                "excerpt": "前端常用插件",
                "cover": "../../pic/image-20210409094037510.png"
            },
            {
                "pagePath": "posts/2021/2020年总结 + 新的一年目标和规划.md",
                "title": "2020年总结 + 新的一年目标和规划",
                "link": "posts/2021/2020年总结 + 新的一年目标和规划.html",
                "date": "2021/02/16",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "日常生活",
                    "年终总结"
                ],
                "tags": [
                    "日常生活",
                    "年终总结"
                ],
                "excerpt": "2020年总结 + 新的一年目标和规划",
                "cover": "https://willern.gitee.io/2021/02/16/20210216/night.jpg"
            },
            {
                "pagePath": "posts/2021/Angular 页面水印功能实现.md",
                "title": "Angular 页面水印功能实现",
                "link": "posts/2021/Angular 页面水印功能实现.html",
                "date": "2021/01/27",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "Angular 页面水印功能实现",
                "cover": "https://willern.gitee.io/2021/01/27/20210127/water-mark.png"
            },
            {
                "pagePath": "posts/2021/解决网站网页html css兼容性问题.md",
                "title": "解决网站网页html css兼容性问题",
                "link": "posts/2021/解决网站网页html css兼容性问题.html",
                "date": "2021/01/21",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "前端"
                ],
                "tags": [
                    "前端",
                    "兼容性",
                    "css"
                ],
                "excerpt": "总结了在项目设计中遇到的兼容性问题，在此整理出来，以备不时之需。",
                "cover": "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvNzU3ODI0LzIwMTcwMy83NTc4MjQtMjAxNzAzMjExMDI1NTgyNjgtMjA1NDc4MDUyMS5wbmc?x-oss-process=image/format,png"
            },
            {
                "pagePath": "posts/2020/树形控件功能实现.md",
                "title": "树形控件功能",
                "link": "posts/2020/树形控件功能实现.html",
                "date": "2020/12/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "树形控件",
                    "功能"
                ],
                "excerpt": "树形控件功能",
                "cover": "../../pic/image-20210415160710543.png"
            },
            {
                "pagePath": "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.md",
                "title": "使用 Angular RouteReuseStrategy 缓存组件",
                "link": "posts/2020/使用 Angular RouteReuseStrategy 缓存组件.html",
                "date": "2020/10/29",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "Angular",
                    "Angular RouteReuseStrategy",
                    "缓存"
                ],
                "excerpt": "使用 Angular RouteReuseStrategy 缓存组件",
                "cover": "https://willern.gitee.io/2020/10/29/20201029/show.gif"
            },
            {
                "pagePath": "posts/2020/wangEditor富文本编辑器.md",
                "title": "wangEditor富文本编辑器",
                "link": "posts/2020/wangEditor富文本编辑器.html",
                "date": "2020/10/25",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "wangEditor",
                    "Angular",
                    "富文本"
                ],
                "tags": [
                    "wangEditor",
                    "富文本"
                ],
                "excerpt": "wangEditor富文本编辑器"
            },
            {
                "pagePath": "posts/2020/Angular 多类名条件判断.md",
                "title": "Angular 多类名条件判断",
                "link": "posts/2020/Angular 多类名条件判断.html",
                "date": "2020/10/22",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Angular 多类名条件判断"
            },
            {
                "pagePath": "posts/2020/angular 复制粘贴事件.md",
                "title": "Angular 复制粘贴事件",
                "link": "posts/2020/angular 复制粘贴事件.html",
                "date": "2020/10/20",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular",
                    "ngx-clipboard"
                ],
                "tags": [
                    "antd",
                    "复制粘贴"
                ],
                "excerpt": "Angular 复制粘贴事件"
            },
            {
                "pagePath": "posts/2020/Echarts 配置和知识点.md",
                "title": "Echarts 配置和知识点",
                "link": "posts/2020/Echarts 配置和知识点.html",
                "date": "2020/09/28",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Angular",
                    "Echarts"
                ],
                "tags": [
                    "知识点",
                    "配置",
                    "Echarts"
                ],
                "excerpt": "Echarts 配置和知识点"
            },
            {
                "pagePath": "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.md",
                "title": "Vue 父子路由的实现以及父子路由的高亮切换显示问题",
                "link": "posts/2020/Vue 父子路由的实现以及父子路由的高亮切换显示问题.html",
                "date": "2020/07/11",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "路由高亮",
                    "父子路由"
                ],
                "excerpt": "Vue 父子路由的实现以及父子路由的高亮切换显示问题"
            },
            {
                "pagePath": "posts/2020/Vue实现分页功能.md",
                "title": "Vue实现分页功能",
                "link": "posts/2020/Vue实现分页功能.html",
                "date": "2020/07/03",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "分页"
                ],
                "excerpt": "Vue实现分页功能",
                "cover": "https://willern.gitee.io/2020/07/03/20200703/show.gif"
            },
            {
                "pagePath": "posts/2020/Vue 动态绑定多个class 带上三元运算或其他条件.md",
                "title": "Vue 动态绑定多个class 带上三元运算或其他条件",
                "link": "posts/2020/Vue 动态绑定多个class 带上三元运算或其他条件.html",
                "date": "2020/06/24",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Vue 动态绑定多个class 带上三元运算或其他条件"
            },
            {
                "pagePath": "posts/2020/Vue-router（路由）的知识点.md",
                "title": "Vue-router（路由）的知识点",
                "link": "posts/2020/Vue-router（路由）的知识点.html",
                "date": "2020/05/01",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Vue"
                ],
                "tags": [
                    "Vue",
                    "vue-router"
                ],
                "excerpt": "Vue-router（路由）的知识点"
            },
            {
                "pagePath": "posts/2019/多列表的jq展开收起效果.md",
                "title": "多列表的jq展开收起效果",
                "link": "posts/2019/多列表的jq展开收起效果.html",
                "date": "2019/12/06",
                "updated": null,
                "author": "深海如梦",
                "contributors": [
                    "EvanJason"
                ],
                "categories": [
                    "Jquery"
                ],
                "tags": [
                    "Jquery"
                ],
                "excerpt": "在做项目的时候碰到的一个需求要做多列表的展开和收起的效果，一开始很快就写好了，可是出现了错误，最后找到了原因是因为动画animate()的效果，最后去掉（没有过度动画蛋疼），终于解决。",
                "cover": "https://img-blog.csdnimg.cn/2019120610061415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dxc3NoMjE=,size_16,color_FFFFFF,t_70"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 11
            },
            {
                "name": "React",
                "count": 4
            },
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "工具",
                "count": 2
            },
            {
                "name": "年终总结",
                "count": 2
            },
            {
                "name": "日常生活",
                "count": 2
            },
            {
                "name": "Antd",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "ECharts",
                "count": 1
            },
            {
                "name": "Jquery",
                "count": 1
            },
            {
                "name": "ngx-clipboard",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "webpack",
                "count": 1
            },
            {
                "name": "前端",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "水印",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 4
            },
            {
                "name": "React",
                "count": 4
            },
            {
                "name": "Vue",
                "count": 4
            },
            {
                "name": "Angular",
                "count": 2
            },
            {
                "name": "vscode",
                "count": 2
            },
            {
                "name": "多类名",
                "count": 2
            },
            {
                "name": "年终总结",
                "count": 2
            },
            {
                "name": "日常生活",
                "count": 2
            },
            {
                "name": "条件判断",
                "count": 2
            },
            {
                "name": "水印",
                "count": 2
            },
            {
                "name": "缓存",
                "count": 2
            },
            {
                "name": "表格",
                "count": 2
            },
            {
                "name": "页面水印",
                "count": 2
            },
            {
                "name": "Angular RouteReuseStrategy",
                "count": 1
            },
            {
                "name": "Antd",
                "count": 1
            },
            {
                "name": "css",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "ECharts",
                "count": 1
            },
            {
                "name": "Jquery",
                "count": 1
            },
            {
                "name": "localstorage",
                "count": 1
            },
            {
                "name": "sessionstorage",
                "count": 1
            },
            {
                "name": "vue-router",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "webpack",
                "count": 1
            },
            {
                "name": "光标处",
                "count": 1
            },
            {
                "name": "兼容性",
                "count": 1
            },
            {
                "name": "分页",
                "count": 1
            },
            {
                "name": "前端",
                "count": 1
            },
            {
                "name": "功能",
                "count": 1
            },
            {
                "name": "复制粘贴",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "快捷键",
                "count": 1
            },
            {
                "name": "打包",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "插入功能",
                "count": 1
            },
            {
                "name": "树形控件",
                "count": 1
            },
            {
                "name": "深浅拷贝",
                "count": 1
            },
            {
                "name": "父子路由",
                "count": 1
            },
            {
                "name": "知识点",
                "count": 1
            },
            {
                "name": "穿梭框",
                "count": 1
            },
            {
                "name": "聚焦",
                "count": 1
            },
            {
                "name": "自定义",
                "count": 1
            },
            {
                "name": "语言代码表",
                "count": 1
            },
            {
                "name": "路由高亮",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            }
        ]
    }
};
