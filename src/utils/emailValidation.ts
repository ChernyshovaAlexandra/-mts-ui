export const allowedDomains = new Set([
  "urent.ru",
  "ticketscloud.com",
  "greendc.ru",
  "bronevik.com",
  "gulfstream.ru",
  "mts.ru",
  "mts.am",
  "mts.by",
  "mtsretail.ru",
  "metro-telecom.ru",
  "mgts.ru",
  "mts-energo.ru",
  "rstudios.ru",
  "ponominalu.ru",
  "stopol-auto.com",
  "litebox.ru",
  "mtsbank.ru",
  "ticketland.ru",
  "it-grad.ru",
  "zelenaya.net",
  "mtt.ru",
  "comdi.com",
  "webinar.ru",
  "iformula.ru",
  "cc.zelenaya.net",
  "mtrend.ru",
  "elista.zelenaya.net",
  "gorodtv.net",
  "tambov.zelenaya.net",
  "vladivostok.zelenaya.net",
  "belgorod.zelenaya.net",
  "lipezk.zelenaya.net",
  "tomsk.zelenaya.net",
  "ufa.zelenaya.net",
  "visionlabs.ai",
  "nov.mts.ru",
  "exolve.ru",
  "skai.online",
  "mts-link.ru",
  "ekb.gulfstream.ru",
  "krd.gulfstream.ru",
  "krk.gulfstream.ru",
  "kzn.gulfstream.ru",
  "nn.gulfstream.ru",
  "nsb.gulfstream.ru",
  "oms.gulfstream.ru",
  "prm.gulfstream.ru",
  "rst.gulfstream.ru",
  "sch.gulfstream.ru",
  "sip.gulfstream.ru",
  "smartsafety.dev",
  "smr.gulfstream.ru",
  "sochi.gulfstream.ru",
  "spb.gulfstream.ru",
  "srv.gulfstream.ru",
  "yar.gulfstream.ru",
  "weareathome.ru",
  "vrz.gulfstream.ru",
  "vgd.gulfstream.ru",
  "ufa.gulfstream.ru",
  "tul.gulfstream.ru",
  "tmn.gulfstream.ru",
  "exibank.ru",
  "exi-bank.ru",
  "urent.city",
  "buzzoola.com",
  "getblogger.ru",
  "segmento.ru",
  "mws.ru",
  "deep-agency.ru",
  "mediascout.ru",
  "capital.com",
  "entrustment.ru",
]);

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
};

export type AdditionalEmailAllowList = {
  domains?: string[];
  emails?: string[];
};

const normalizeEmail = (email: string): string => email.toLowerCase().trim();

const normalizeDomain = (domain: string): string =>
  domain.toLowerCase().trim().replace(/^@/, "");

export const isEmailAllowed = (
  email: string,
  additionalAllowList: AdditionalEmailAllowList = {}
): boolean => {
  if (!isValidEmail(email)) return false;

  const normalizedEmail = normalizeEmail(email);
  const domain = normalizedEmail.split("@")[1];

  if (allowedDomains.has(domain)) return true;

  const additionalEmails = new Set(
    additionalAllowList.emails?.map(normalizeEmail)
  );
  if (additionalEmails.has(normalizedEmail)) return true;

  const additionalDomains = new Set(
    additionalAllowList.domains?.map(normalizeDomain)
  );
  return additionalDomains.has(domain);
};

export const russianLettersPattern = /^[а-яА-ЯёЁ\s\-']+$/;
