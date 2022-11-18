javascript:q=location.href;
usplit = q.split('/');
const u1 = usplit[usplit.length - 1];
const s1 = usplit[usplit.length - 2];
void(open('https://mastodon.social/' + u1 + '@' + s1));
