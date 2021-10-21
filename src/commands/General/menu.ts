import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/ichi/arin.mp4','./assets/images/ichi/arin2.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        const mn=`
🪆ᴋᴏɴɪᴄʜɪᴡᴀ! *${M.sender.username}*, ɪ'ᴍ 𝙼𝚊𝚒-𝚂𝚊𝚗
ᴇɴᴊᴏʏ ᴜsɪɴɢ ᴍʏ ᴄᴏᴍᴍᴀɴᴅs....

📜ʜᴇʀᴇ ᴀʀᴇ ᴛʜᴇ ʟɪsᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs : -

🎊 ғᴜɴ 🎊

🔖 ғᴀᴄᴛ  
🔖 ǫᴜᴏᴛᴇ
🔖 ғǫᴜᴏᴛᴇ      
🔖 ᴡʜʏ
🔖 ᴊᴏᴋᴇ        
🔖 ᴛʀɪɢɢᴇʀ
🔖 sʜɪᴘ

⛩️ ᴡᴇᴇʙ ⛩️

🏷️ᴡᴀɪғᴜ            
🏷️ ɴᴇᴋᴏ
🏷️ ᴀɴɪᴍᴇ-ʟɪɴᴇ      
🏷️ ʟᴏʟɪ
🏷️ ʀᴘᴀᴘᴇʀ          
🏷️ ᴋɪᴛsᴜɴᴇ
🏷️ ᴍᴇɢᴜᴍɪᴘᴀᴘᴇʀ
🏷️ ʜᴜsʙᴀɴᴅʀᴏ
🏷️ sʜɪɴᴏʙᴜ-ᴘᴀᴘᴇʀ
🏷️ ɢᴇɴsʜɪɴ ᴄʜᴀʀᴀᴄᴛᴇʀ
🏷️ ᴀɴɪᴍᴇ ᴄʜᴀʀᴀᴄᴛᴇʀ

🎐 ɢᴇɴᴇʀᴀʟ 🎐

♐ ᴀᴅᴍɪɴs         
♐ ᴅᴇʟᴇᴛᴇ
♐ ᴇᴠᴇʀʏᴏɴᴇ       
♐ ᴍᴏᴅs
♐ ᴘʀᴏғɪʟᴇ        
♐ xᴘ
♐ ɢᴏᴏɢʟᴇ
♐ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
♐ ʀᴇᴠᴏᴋᴇ

🎼 ᴍᴇᴅɪᴀ 🎼

🎶 ʟʏʀɪᴄs      
🎶 sᴘᴏᴛɪғʏ
🎶 ʏᴛᴀ         
🎶 ʏᴛᴠ
🎶 ʏᴛs         
🎶 ᴘʟᴀʏ
🎶 ᴘʟᴀʏᴠ
🎶 ssᴡᴇʙ

📃 ᴍɪsᴄ 📃

⛓️ ʜɪ          
⛓️ ʀᴇᴛʀɪᴇᴠᴇ
⛓️ ᴄʀʏᴘᴛᴏ 
⛓️ ᴡᴇᴀᴛʜᴇʀ

📯 ᴍᴏᴅᴇʀᴀᴛɪᴏɴ 📯

📍ᴀᴄᴛɪᴠᴀᴛᴇ     
📍ᴄʟᴏsᴇ
📍ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ   
📍ᴏᴘᴇɴ
📍ᴅᴇᴍᴏᴛᴇ        
📍ᴘᴜʀɢᴇ
📍ᴘʀᴏᴍᴏᴛᴇ       
📍ʀᴇᴍᴏᴠᴇ
📍ɢʀᴏᴜᴘᴄʜᴀɴɢᴇ

⚠️ ɴsғᴡ ⚠️

🀄 ʙʟᴏᴡᴊᴏʙ    
🀄 ɴsғᴡᴊᴏᴋᴇ
🀄 ɴsғᴡ-ɴᴇᴋᴏ  
🀄 ᴛʀᴀᴘ
🀄 ɴsғᴡ-ᴡᴀɪғᴜ

🎭 ʀᴇᴀᴄᴛɪᴏɴs 🎭

🎗️ ʙɪᴛᴇ        
🎗️ ʜɪɢʜғɪᴠᴇ
🎗️ ʙʟᴜsʜ       
🎗️ sᴍᴜɢ
🎗️ ʙᴏɴᴋ        
🎗️ ʜᴜɢ
🎗️ ʙᴜʟʟʏ       
🎗️ ᴋɪᴄᴋ
🎗️ ᴄʀɪɴɢᴇ      
🎗️ ᴋɪʟʟ
🎗️ ᴄʀʏ         
🎗️ ᴋɪss
🎗️ ᴄᴜᴅᴅʟᴇ      
🎗️ ʟɪᴄᴋ
🎗️ ᴅᴀɴᴄᴇ       
🎗️ ᴘᴀᴛ
🎗️ ᴇᴀᴛ         
🎗️ ᴘᴏᴋᴇ
🎗️ ʜᴀɴᴅʜᴏʟᴅ    
🎗️ sʟᴀᴘ
🎗️ ʜᴀᴘᴘʏ       
🎗️ sᴍɪʟᴇ
🎗️ ᴜʟᴛʀᴀʜᴜɢ    
🎗️ ᴡᴀᴠᴇ
🎗️ ᴡɪɴᴋ        
🎗️ ʏᴇᴇᴛ

🪦 ᴜᴛɪʟs 🪦

⏳ ʙʟᴜʀ    
⏳ sᴛɪᴄᴋᴇʀ
⏳ sᴛᴇᴀʟ   
⏳ sᴜʙʀᴇᴅ

🖥️ ᴅᴇᴠ 🖥️

💻 ʙᴀɴ
💻 ᴅɪsᴀʙʟᴇ
💻 ᴇɴᴀʙʟᴇ
💻 ᴇᴠᴀʟ
💻 ʟᴇᴀᴠᴇ
💻 sᴛᴀᴛᴜs
💻 ᴜɴʙᴀɴ
 
𝐈𝐜𝐡𝐢𝐠𝐨-𝐁𝐨𝐭𝐭𝐨©
`
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
