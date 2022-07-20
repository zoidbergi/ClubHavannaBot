const whatDidYouJustSay: string = 'What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.';

const littleBitch: string = "Has it not occurred to you that the voice you've read my post in is in fact the voice in your head? It's your voice, it bears your tone, and your judgement values. How about this: Why are you being a little bitch? I am the matriarch of redditarian gang banging, dear. Do you not know who I am? I am desperately lonely. Are you trying to be my friend? Because you've got an interesting way of going about it. I'm ok with this, I can work with this, this is what we do. I do this. (That's an ICP reference. Get it?) Or am I wrong? Are you hurt or offended by something I said? Have I wronged you somehow? Are you upset? Do you feel trolled? As your friend, I feel obliged to inform you that if you said \"yes\" to any of these questions, you might be misattributing things to me which do not exist. If you don't understand what that means, how about don't sit there and tell me I'm both somehow subjective and also wrong. You can't have it both ways. So what's it going to be, chummer? I am The House. And The House says the door is open. Are you going to walk in here, fuck my shit up, and steal my properties? Ok, that's rude. We could also just chill. If I think I'm someone who thinks they're deeper than they actually are, then clearly I must dig deeper. I died once, true story. Listen... everything I've said in this thread... you must read in a voice with a friendly tone. And before you interrupted me, a youthful jubilence. You're abrasive, I'm sure you already know that. I understand I can be abrasive as well. I can understand you, I need you to understand me. If you don't understand me, we can't be friends. If we can't be friends, then you best get to stepping because you're in my way. Are you good?";

const wotDoFuk: string = 'Wot the fok did ye just say 2 me m8? i dropped out of newcastle primary skool im the sickest bloke ull ever meet & ive nicked ova 300 chocolate globbernaughts frum tha corner shop. im trained in street fitin’ & im the strongest foker in tha entire newcastle gym. yer nothin to me but a cheeky lil bellend w/ a fit mum & fakebling';

const reverse: string = '˙ʇı ןןɐɔ noʎ ɹǝʌǝʇɐɥʍ ɹo ,ɐʇǝq, pǝɹǝpısuoɔ buıǝq ɟo ʞɔıs ɯ,ı ˙ʇı ʇnoqɐ ʎɹɔ oʇ ǝɯ oʇ ʞןɐʇ ʎןuo puɐ ‘ʇıɥs ǝʞıן ɯǝɥʇ ʇɐǝɹʇ oɥʍ sʎnb bɐqǝɥɔnop ɹǝʇɟɐ ob sʎɐʍןɐ sןɹıb ǝsǝɥʇ puǝ ǝɥʇ uı ˙ʎpɐן,ɯ ɹoɟ buıɥʇʎuɐ op pןnoʍ puɐ ‘qoظ ǝɔıu ɐ ʞɹoʍ ‘ʎnb ǝɔıu ɐ ɯ,ı ˙ǝuoz puǝıɹɟ ǝɥʇ uı ʇnd buıǝq sʎɐʍןɐ ı ɯɐ ʎɥʍ';

const fuckThisChat: string = 'That’s it, I’m done. Fuck this chat. It’s devolved into a mass of retarded copy pastes and face spam. The quality of twitch chat has been declining for a while, but this is the last straw. That’s it. I’m done. I’m uninstalling the internet, chopping off my dick and moving to fucking Antarctica, at least the bacteria there will be fucking smarter discourse';

const pizza: string = 'I can no longer resist the pizza. I open the box and unzip my pants with my other hand. As I penetrate the gooey cheese, I moan in ecstacy. The mushrooms and Italian sausage are rough, but the sauce is deliciously soothing. I blow my load in seconds. As you leave the bathroom, I exit through the front door….';

export const replyList: string[] = [
  whatDidYouJustSay,
  littleBitch,
  wotDoFuk,
  reverse,
  fuckThisChat,
  pizza,
];

function selectRandomCopyPasta(): string {
  const randomIndex = Math.floor(Math.random() * replyList.length);
  const reply = replyList[randomIndex];
  return reply;
}

export function generateCopyPastaReply(): string {
  const reply = selectRandomCopyPasta();
  return reply;
}
