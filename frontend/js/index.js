$(() => {
    //Submiting form
    $("form").submit((e) => {
        e.preventDefault();
        });

    //Hidding and showing transaction options
    $('[name=transaction]').change((e) => {
    e.preventDefault();
    let selected = $('input[name="transaction"]:checked').val();
    transValue = selected;
    if (transValue === "withdraw" || transValue === "deposit" ) {
        $("#divAcc").show()
        $("#divFrom").hide()
        $("#divTo").hide()
    } else if (transValue === "transfer") {
        $("#divAcc").hide()
        $("#divFrom").show()
        $("#divTo").show()
    }})
    
    //Getting value from radio btn - transaction
    $(document).ready(function(){
        $("input[type='radio']").click(function(){
            let radioValue = $("input[name='transaction']:checked").val();
            if(radioValue === "deposit"){
                let deposit = radioValue;
                console.log(deposit);
            } else if (radioValue === "withdraw") {
                let withdraw = radioValue;
                console.log(withdraw);
            } else {
                let transfer = radioValue;
                console.log(transfer);
            };
        });
    });

    
});