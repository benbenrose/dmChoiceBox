# dmChoiceBox 1.0
# auth lily
API:
    $('#demo').choicebox({type:'checkbox',attr:'value'}).on('change.dm.choice',function (data) {
                                    console.log(data);
    });

    $('#demo').choicebox({type:'radio',attr:'value'}).on('change.dm.choice',function (data) {
    console.log(data.checkCollect);
    });
     type:checkbox/radio

     attr:需要的数据绑定的节点名称 默认：value
     data.checkedCollect:选中的数据
     按钮触发 清空和全部选中
      $('#demo').choicebox('choiceAll');
      $('#demo').choicebox('cleanAll');
## dom 第一种
   <p> <div class="table-responsive J_orderTable_cont"></p>
    <!--表格-->
    <table class="cabinTable table table-hover table-bordered">
    <thead>
    <tr>
     <th>
     <div class="checkbox-inline">
     <input type="checkbox" id="th1">
     <label for="th1"  data-check="all"></label>
     </div>
      <div class="checkbox-inline" >
      <input type="checkbox"    id="checkbox2" >
      <label for="checkbox2"  data-check="allinverse">反选</label>
      </div>
        </th>
        <th>姓名</th>
        <th>姓名</th>
        <th>姓名</th>
        <th>姓名</th>
        <th>姓名</th>
        <th>姓名</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>
            <div class="checkbox">
                <input type="checkbox" id="th11" value="121">
                <label for="th11" data-check="one"></label>
            </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>
            <div class="checkbox">
                <input type="checkbox" id="th12" value="122">
                <label for="th12" data-check="one"></label>
            </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>
            <div class="checkbox">
                <input type="checkbox" id="th13" value="123">
                <label for="th13" data-check="one"></label>
            </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>
            <div class="checkbox">
                <input type="checkbox" id="th14" value="124">
                <label for="th14" data-check="one"></label>
            </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>
            <div class="checkbox">
                <input type="checkbox" id="th15" value="125">
                <label for="th15" data-check="one"></label>
            </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
         </tbody>
          </table>
         </div>


## dom 第2种bootstrap：
   <p> <div class="table-responsive" id="testDemo">
          <table class="table table-condensed">
              <thead>
              <tr>
                  <th >
                      <label class="checkbox-inline">
                          <input type="checkbox" data-check="all" >全选
                      </label>
                      <label class="checkbox-inline">
                          <input type="checkbox" data-check="allinverse">反选
                      </label>
                  </th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>年龄</th>
              </tr>
              </thead>
              <tr>
                  <td class="active">
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" value="lily1" data-check="one">
                          </label>
                      </div>
                  </td>
                  <td class="active">lily1</td>
                  <td class="success">nv</td>
                  <td class="warning">保密</td>
              </tr>
              <tr>
                  <td class="active">
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" value="lily2" data-check="one">
                          </label>
                      </div>
                  </td>
                  <td class="active">lily2</td>
                  <td class="success">nv</td>
                  <td class="warning">保密</td>
              </tr>
              <tr>
                  <td class="active">
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" value="lily3" data-check="one">
                          </label>
                      </div>
                  </td>
                  <td class="active">lily3</td>
                  <td class="success">nv</td>
                  <td class="warning">保密</td>
              </tr>
              <tr>
                  <td class="active">
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" value="lily4" data-check="one">
                          </label>
                      </div>
                  </td>
                  <td class="active">lily4</td>
                  <td class="success">nv</td>
                  <td class="warning">保密</td>
              </tr>
          </table>
      </div></p>