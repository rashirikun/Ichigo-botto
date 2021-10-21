import { MessageType, WAParticipantAction } from '@adiwajshing/baileys'
import chalk from 'chalk'
import request from '../lib/request'
import WAClient from '../lib/WAClient'

export default class EventHandler {
    constructor(public client: WAClient) {}

    handle = async (event: IEvent): Promise<void> => {
        const group = await this.client.fetchGroupMetadataFromWA(event.jid)
        this.client.log(
            `${chalk.blueBright('EVENT')} ${chalk.green(
                `${this.client.util.capitalize(event.action)}[${event.participants.length}]`
            )} in ${chalk.cyanBright(group?.subject || 'Group')}`
        )
        const data = await this.client.getGroupData(event.jid)
        if (!data.events) return void null
        const add = event.action === 'add'
       const tt= `*@${event.participants[0].split('@')[0]}* has left the chat 👋`
        const text = add
            ? `*Welcome to*- ${group.subject || '___'} -\n\n💠 *Group Description:*\n${
                  group.desc
              }\n\nHope you follow the rules and have fun!\n*‣ ${event.participants
                  .map((jid) => `@${jid.split('@')[0]}`)
                  .join(', ')}*`
            : event.action === 'remove'
            ? tt
            : `*@${event.participants[0].split('@')[0]}* got ${this.client.util.capitalize(event.action)}d${
                  event.actor ? ` by *@${event.actor.split('@')[0]}*` : ''
              }`
        const contextInfo = {
            mentionedJid: event.actor ? [...event.participants, event.actor] : event.participants
        }
        if (add) {
             const n = [
                '../assets/images/welcome1.mp4'
            ]
            let image = n[Math.floor(Math.random() * n.length)]
            if (image)
                return void (await this.client.sendMessage(event.jid, image, MessageType.video, {
                     mimetype: Mimetype.gif,
                    caption: text,
                    contextInfo
                }))
        }
           return void this.client.sendMessage(event.jid, text, MessageType.extendedText, { contextInfo })
    }
    
    
}

interface IEvent {
    jid: string
    participants: string[]
    actor?: string | undefined
    action: WAParticipantAction
}
