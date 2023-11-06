// I will handle db connection here temporally

import { messageModel } from "@/interfaces/messageModel";

const getMessages = ():messageModel[] => {
    

    return [{
        id: "123455",
        message: "Hello Everyone I'm CJ",
        user: "Win32",
        color: "blue"
      },
      {
        id: "123456",
        message: "Message Number 2",
        user: "Win32",
        color: "blue"
      },
    ]
}

export default getMessages;