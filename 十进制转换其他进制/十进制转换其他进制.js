"ui";
ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar"bg="#00B38C"title="十进制转换其他进制"/>
            </appbar>
            <horizontal>
            <text textSize="20sp"textColor="black"text="十进制数字："/>
            <input id="十进制数字"text="25"/>
            </horizontal>
            <horizontal>
            <text textSize="20sp"textColor="black"text="转换进制："/>
            <input id="转换进制"text="2"/>
            <text textSize="18sp"textColor="black"text="进制"/>
            </horizontal>
            <button id="开始"text="开始转换进制"/>
        </vertical>
        </drawer>
);
ui.开始.click(function(){
    var 十进制数字=ui.十进制数字.getText();
    var 转换进制=ui.转换进制.getText();
    dialogs.alert("进制转换结果",(十进制数字-0).toString(转换进制-0));
});
