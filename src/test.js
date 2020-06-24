const xmlToJson = require("xml-to-json-stream");
const parser = xmlToJson({ attributeMode: true });

const xml = `<process id="123" name="ReactVacationRequest">
	<elements type="process:Lane" name="Employee lane" actor=""></elements>
	<elements type="process:StartEvent" name="Start1">
		<elements type="process:Task" name="Fill Request">
			<formMapping type="process:FormMapping" id="_HQJd8JBxEeqAT4rd6Z_mLw" typeInput="URL" url="http://localhost:3000/bonita/form">
            <targetForm type="expression:Expression" id="_Zkew4JBxEeqAT4rd6Z_mLw" name="RequestForm" content="a1893745-8ba3-43fa-a79d-2a2537a375d4" typeInput="FORM_REFERENCE_TYPE" returnTypeFixed="true"/>
          </formMapping>
			<variables>
				<variable name="task" type="url"
					value="../API/bpm/userTask/{{taskId}}"></variable>
			</variables>
			<contract type="process:Contract"></contract>
			<inputs type="process:ContractInput" name="requestInput"
				typeInput="COMPLEX" dataReference="request">
				<inputs type="process:ContractInput" name="employeeName"
					typeInput="STRING" />
				<inputs type="process:ContractInput" name="numberOfDays"
					typeInput="INTEGER" />
			</inputs>
		</elements>
		<elements type="process:Task" name="Review Request">
			<formMapping type="process:FormMapping" id="_ImMDyZBxEeqAT4rd6Z_mL" typeInput="URL" url="http://localhost:3000/bonita/reviewRequestForm">
            <targetForm type="expression:Expression" id="_aZalwJRLEeqhvamzlTseWw" name="reviewForm" content="1726213f-9fb5-498d-9824-a7fedfe02343" typeInput="FORM_REFERENCE_TYPE" returnTypeFixed="true"/>
          </formMapping>
			<variables>
				<variable name="task" type="url"
					value="../API/bpm/userTask/{{taskId}}"></variable>
				<variable name="context" type="url"
					value="../API/bpm/userTask/{{taskId}}/context"></variable>
				<variable name="taskId" type="urlparameter" value="id"></variable>
				<variable name="request" type="url"
					value="../{{context.request_ref.link}}"></variable>
			</variables>
			<contract type="process:Contract" id="hssd5sd5d5s58"></contract>
				<inputs type="process:ContractInput" name="requestInput"
				typeInput="COMPLEX" dataReference="request">
					<inputs type="process:ContractInput" name="employeeName"
					typeInput="STRING" />
					<inputs type="process:ContractInput" name="numberOfDays"
					typeInput="INTEGER" createMode="false" />
			</inputs>
		</elements>
		<formMapping type="process:FormMapping" id="_HQJd9JBxEeqAT4rd6Z_mLw" typeInput="URL" url="http://localhost:3000/bonita/processInstantiationForm">
        	<targetForm type="expression:Expression" id="_B1RrcJfWEequdJfJwQcydQ" name="instanciationForm" content="485007d3-9774-4972-80f3-52d371ac509a" typeInput="FORM_REFERENCE_TYPE" returnTypeFixed="true"/>
        </formMapping>
        <contract type="process:Contract" id="_HQJd_JBxEeqAT4rd6Z_mLw"/>
		<data type="process:BusinessObjectData" name="request"
			dataType="_uLLFrZNyEeqhvamzlTseWw"
			className="com.company.model.Request">
		</data>
		<elements type="process:EndEvent"
			id="_uLKewpNyEeqhvamzlTseWw" name="End -Request processed"
			incoming="_uLKe0pNyEeqhvamzlTseWw">
		</elements>
	</elements>
</process>`;

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
