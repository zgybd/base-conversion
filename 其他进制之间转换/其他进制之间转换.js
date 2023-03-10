"ui";
ui.layout(
    <vertical>
    <horizontal>
    <text textSize="20sp"textColor="black"text="数字："/>
    <input id="数字"text="1101011"/>
    </horizontal>
    <horizontal>
    <text textSize="20sp"textColor="black"text="数字进制："/>
    <input id="数字进制"text="2"/>
    <text textSize="18sp"textColor="black"text="进制"/>
    </horizontal>
    <horizontal>
    <text textSize="20sp"textColor="black"text="转换进制："/>
    <input id="转换进制"text="8"/>
    <text textSize="18sp"textColor="black"text="进制"/>
    </horizontal>
    <button id="开始"text="开始转换进制"/>
    <text text="请打开悬浮窗权限" gravity="center"  />
    </vertical>
    );
    ui.开始.click(function(){
    var 数字=ui.数字.getText();
    var 数字进制=ui.数字进制.getText();
    var 转换进制=ui.转换进制.getText();
    dialogs.alert("进制转换结果",(parseInt(数字,数字进制)).toString(转换进制));
    });