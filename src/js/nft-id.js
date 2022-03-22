export default function nft_id(){
    $(document).ready(() => {
        $(".0x4565_id_but").click(() => {
            $.post('/0x4565', {
                "0x4565": $(".0x4565_id_inp").val()
            }, (data) => {
                if (data == "succ_0x4565"){
                    location.reload();
                }
            })
        })
    })
}