
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'pick',
            description: 'Tags all users in group chat',
            aliases: ['tag'],
            category: 'general',
            usage: `${client.config.prefix}everyone`,
            baseXp: 20
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
       
     const mem=M.groupMetadata?.participants?.map(User) => user.jid
     let lol=mem[Math.floor(Math.random() * mem.length)]
     return void(await M.reply(lol) .catch((reason: any) => M.reply(`an error occurred, Reason: ${reason}`)))
    
   }
}
