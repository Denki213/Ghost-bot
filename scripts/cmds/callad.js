const { getStreamsFromAttachment, log } = global.utils;
const mediaTypes = ["photo", "png", "animated_image", "video", "audio"];

module.exports = {
	config: {
		name: "callad",
		version: "1.8",
		author: "NTKhang (modifié par Renji Starfall)",
		countDown: 5,
		role: 0,
		description: {
			vi: "Envoyez un message aux utilisateurs spécifiques",
			en: "Send a message to specific users"
		},
		category: "contacts users",
		guide: {
			vi: "   {pn} <tin nhắn>",
			en: "   {pn} <message>"
		}
	},

	langs: {
		vi: {
			missingMessage: "Vui lòng nhập tin nhắn bạn muốn gửi",
			sendByUser: "\n- Được gửi từ người dùng",
			content: "\n\nNội dung:\n─────────────────\n%1\n─────────────────",
			success: "Đã gửi tin nhắn thành công tới :\n%1",
			failed: "Gửi tin nhắn thất bại tới :\n%1\nKiểm tra console để biết thêm chi tiết",
		},
		en: {
			missingMessage: "Please enter the message you want to send",
			sendByUser: "\n- Sent from user",
			content: "\n\nContent:\n─────────────────\n%1\n─────────────────",
			success: " ✨Message sent successfully to:\n%1 ✨",
			failed: "⚠ Failed to send message to:\n%1\nCheck console for details",
		}
	},

	onStart: async function ({ args, message, event, usersData, api, getLang }) {
		if (!args[0])
			return message.reply(getLang("missingMessage"));

		const { senderID } = event;
		const senderName = await usersData.getName(senderID);
		const recipientIDs = ["61557674704673", "61550646484601"]; // Liste des UID des destinataires

		// Construction du message à envoyer
		const msg = "==📨 MESSAGE TO USERS 📨=="
			+ `\n- Sent by: ${senderName} (${senderID})`
			+ getLang("sendByUser");

		const formMessage = {
			body: msg + getLang("content", args.join(" ")),
			mentions: [{ id: senderID, tag: senderName }],
			attachment: await getStreamsFromAttachment(
				[...event.attachments, ...(event.messageReply?.attachments || [])]
					.filter(item => mediaTypes.includes(item.type))
			)
		};

		const successIDs = [];
		const failedIDs = [];

		// Envoi du message aux destinataires
		for (const uid of recipientIDs) {
			try {
				await api.sendMessage(formMessage, uid);
				successIDs.push(uid);
			} catch (err) {
				failedIDs.push({ uid, error: err });
			}
		}

		// Construction de la réponse à l'utilisateur
		let responseMessage = "";
		if (successIDs.length > 0) {
			responseMessage += getLang("success", successIDs.map(id => `- <@${id}>`).join("\n"));
		}
		if (failedIDs.length > 0) {
			responseMessage += getLang("failed", failedIDs.map(item => `- <@${item.uid}>`).join("\n"));
			log.err("MESSAGE TO USERS", failedIDs);
		}

		return message.reply({
			body: responseMessage,
			mentions: recipientIDs.map(id => ({ id, tag: id })) // Mentionner les destinataires
		});
	},
};
