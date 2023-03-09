"ui";
ui.layout(
    <drawer>
        <vertical>
            <appbar>
                <toolbar id="toolbar"bg="#00B38C"title="其他进制转换十进制"/>
                </appbar>
                <horizontal>
                <text textSize="20sp"textColor="black"text="数字："/>
                <input id="数字"text="1101011"/>
                </horizontal>
                <horizontal>
                <text textSize="20sp"textColor="black"text="数字进制："/>
                <input id="进制"text="2"/>
                <text textSize="18sp"textColor="black"text="进制"/>
                </horizontal>
                <button id="开始"text="开始转换进制"/>
        </vertical>
        </drawer>
);
ui.开始.click(function(){
    var 数字=ui.数字.getText();
    var 进制=ui.进制.getText();
    dialogs.alert("进制转换结果",parseInt(数字,进制));
    });