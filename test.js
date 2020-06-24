const xmlToJson = require("xml-to-json-stream");
const parser = xmlToJson({ attributeMode: true });

const xml = `<elements type="process:Task" name="Fill Request">
<formMapping type="process:FormMapping" id="_HQJd8JBxEeqAT4rd6Z_mLw" typeInput="URL" url="http://localhost:3000/bonita/form">
<targetForm type="expression:Expression" id="_Zkew4JBxEeqAT4rd6Z_mLw" name="RequestForm" content="a1893745-8ba3-43fa-a79d-2a2537a375d4" typeInput="FORM_REFERENCE_TYPE" returnTypeFixed="true"/>
</formMapping>
<variables>
    <variable name="task" type="url"
        value="../API/bpm/userTask/{{taskId}}"></variable>
</variables>
<contract type="process:Contract">
 <inputs type="process:ContractInput" name="requestInput"
    typeInput="COMPLEX" dataReference="request">
    <inputs type="process:ContractInput" name="employeeName" typeInput="COMPLEX">
         <inputs type="process:ContractInput" name="employeeName"
        typeInput="STRING" />
        </inputs>
    <inputs type="process:ContractInput" name="numberOfDays"
        typeInput="INTEGER" />
 </inputs>
</contract>
</elements>`;

parser.xmlToJson(xml, (err, json) => {
  if (err) {
    //error handling
  }

  console.log(JSON.stringify(json));
  //json
  //{
  //  employee: {
  //      name: "Alex"
  //  }
  //}
});
