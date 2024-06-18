import { getApps, initializeApp, cert } from 'firebase-admin/app';

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "greenskills-ba9a4",
  private_key_id: "f180b19e9ddd91f3699ca541d03af3eaac529119",
  private_key: "-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4gUlSyVRBYWus\\nMq/3rRnn8Ng2uGz2ZDGCY23FkSt9reV9j5psG/INOcu0YuOd99AwYWcmTD6w8YnR\\nxzIK9hGwbzEvSJ0IEUfuZ5pK+xqdLIN5GapirP+u1IWyzOqvjA4DoEkCTIAZwdc6\\nmsXxD0yB68movvp5DI2d6XIMiDv2mjIaJf/m4ZQ62z9Lvr0+gsTZaGGmKP6qLsDg\\nTn8n6R2MiOlIIzYBQtnxyy2J4W6zOV8v0oz6Ptk9Ly4LYY2Y59MTeP+jpeVtKoGK\\n3grADaMCRXFT/w1HwL2PMt0XRTiR5qKxPVWwuLq4zsS2cyXlgAoYznow/78XeB22\\nOyDa/iLfAgMBAAECggEAL3ePgh1qsEFcfpoxvEIL6qiDL5zF56PCOv3ShWQCMNy2\\nsFVsEIkl/jISzq8sSP0y0eeVLnyqGkKhxtb88GX7Cg2pNTV0tNkhTNvZjZXJdIs5\\nrcOlGqrQQs3JMcVXUV9yUYuAjPdac4Xzlc+wwgJCGCCtqlyrus24d1pSLZg0+Q2l\\nlh9mQ15jAXD3V4rnGCxbRTD69hwCiSE2BWKrD2/8O3bpHIkUWaQzqTYxhbqtUTEg\\n6P8TcPRonzFkAaoZ7ITLi/MBHGihWnEj9ixSvWPohMnVtJ8W6iKyGkTx7adCFHJQ\\n6MVBCOUU7Q0A1lq5kdXhKEkr2q1cx4LC6FmtDYINBQKBgQDhDc6Rd9yExYXfHpjA\\ns68xM6NNZSu5/TSHFDc55GpOt1ruN+ivDe27stV3nk/b+3MXMI+IOu2PvL5Jm5NY\\nyGRCde3s4xjzWqzl0hI+O6+/WUJq1iOU5btuZUAPZhpMyGSRq1c03BFannhMJaxW\\n3hewdPQOqjb7AK3uTmibUFVKkwKBgQDR4BrX/BYsi3a4xX69NBl7aA+FZjoi6cp2\\ny45919JKl/FWRWAR4/8Xh1GPJJZBqca4UneVoIUu0Lkd57cDJdGRl01WKQYkq3yI\\nH3ZHlT+be5uoIJqXSQrXCH+oM+TgW8dzBelhZVmZ369wnJDJign2afYgrK+01tYs\\neTTCg/RaBQKBgC+8av1mDCtJblzmM4ZkVpu8FT5cYEsCDzs7qX8pGPd7Ytk2mK9Q\\n6AUxKKBHvy6tBjt7/GXsAenEIiSg0D87ujByrTXa8bbkm9nflikHJf8TYsgghcmW\\ndQw0g8MAaEGzG8neKxA2QaQUCvYz43tFfobaN85IgoL5IOt0TDHtdznrAoGBAMGm\\nHF6plPQpArReViDRz6lUTO3zczT/rvaJv8JRvxFgvSey/3/CdX8KNrDzO0j/FALC\\n5OBEql6V7Bix0uWuoX3Ks2sKk0aGjHM1RHesOHKITQmGe92XYc8jYlaa+1YgmRmC\\nnOJnF5OpF0G61MWA/sxE3PstGzqq+Bc1Bv9rrazZAoGBAI6RH7wgZHHvLtw1t4oH\\njRqKuKYK/+I7pmWD/ncJbiY0dfWgDbtdQCcfQgjiowM++Xe2BRBLd8hbVGK86l0o\\nM1MSwNng4U8MRcgJgicAzWW1EmOe0pYN2AVa/+a6luONTvkHPBYJf/D63NEUjS3P\\nkJRxfJELiwTmLpCmzHO5IFj2\\n-----END PRIVATE KEY-----\\n".replace(/\\n/g, "\n"),
  client_email: "firebase-adminsdk-wmtuj@greenskills-ba9a4.iam.gserviceaccount.com",
  client_id: "107796851924269016985",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wmtuj%40greenskills-ba9a4.iam.gserviceaccount.com"
};
const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount)
}) : activeApps[0];

export { app as a };
