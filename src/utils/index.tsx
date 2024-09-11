import Web3Avatar from "../components/Web3Avatar"
import { RecentContact } from "../types/api.types"

export const getImageFromUser = (contact: RecentContact) => {
    if (contact.destinationUser) {
        if (contact.destinationUser.imageUrl)
            return <img src={contact.destinationUser.imageUrl} alt="PFP" />
        else
            return <img src={`https://avatar.iran.liara.run/username?username=${contact.destinationUser.name.split(' ').join("+")}`} alt="PFP" />
    } else {
        return <Web3Avatar address={contact.destinationAddress} />
    }
}

export const shortAddress = (address: string | undefined) => {
    if (address)
        return `${address.slice(0, 5)}....${address.slice(-4)}`
}