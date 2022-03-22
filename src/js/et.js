export default function et(){
    const alert = (title, msg) => {
        return `
        <div class="hidden bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p class="font-bold">${title}</p>
            <p>${msg}</p>
        </div>`
    }

    const success = (title, msg) => {
        return `
        <div class="hidden bg-teal-100 border-l-4 border-teal-500 text-teal-900 p-4" role="alert">
            <p class="font-bold">${title}</p>
            <p>${msg}</p>
        </div>`
    }

    $(document).ready(async () => {
        $("#mt-connect").click(async () => {
            await s();
        })
    })

    function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            const info = $(alert("Connection Error", "Connection to metamask failed. Please try again"))
            info.appendTo(".grid")
            info.toggle(500)
        } else {
            const currentAccount = accounts[0];
            const info = $(success("Connection Success", "You will be redirected to buzzer nft input page"))
            info.appendTo(".grid")
            info.toggle(500)
            $.post('/', {
                account: currentAccount
            }, (res) => {
                console.log(res)
                if (res == "succ"){
                    location.reload();
                }
            })
            console.log(currentAccount)
            
        }
    }  

    async function s(){
        const provider = window.ethereum
        if (provider) {
            console.log('Ethereum successfully detected!')
            const chainId = await provider.request({
                method: 'eth_chainId'
            })
            const cred = await provider.request({ method: 'eth_requestAccounts' }).then(handleAccountsChanged).catch((err) => {
            if (err) {
                console.log(err)
                const info = $(alert("Connection Error", "Connection to metamask failed. Please try again"))
                info.appendTo(".connect-mtmsk")
                info.toggle(500)
            }
            });
        } else {
            console.error('Please install MetaMask!', error)
        }
    }
}