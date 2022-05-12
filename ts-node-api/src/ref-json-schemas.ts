
const countryCode = [
  'ABW',
  'AFG',
  'AGO',
  'AIA',
  'ALA',
  'ALB',
  'AND',
  'ARE',
  'ARG',
  'ARM',
  'ASM',
  'ATA',
  'ATF',
  'ATG',
  'AUS',
  'AUT',
  'AZE',
  'BDI',
  'BEL',
  'BEN',
  'BES',
  'BFA',
  'BGD',
  'BGR',
  'BHR',
  'BHS',
  'BIH',
  'BLM',
  'BLR',
  'BLZ',
  'BMU',
  'BOL',
  'BRA',
  'BRB',
  'BRN',
  'BTN',
  'BVT',
  'BWA',
  'CAF',
  'CAN',
  'CCK',
  'CHE',
  'CHL',
  'CHN',
  'CIV',
  'CMR',
  'COD',
  'COG',
  'COK',
  'COL',
  'COM',
  'CPV',
  'CRI',
  'CUB',
  'CUW',
  'CXR',
  'CYM',
  'CYP',
  'CZE',
  'DEU',
  'DJI',
  'DMA',
  'DNK',
  'DOM',
  'DZA',
  'ECU',
  'EGY',
  'ERI',
  'ESH',
  'ESP',
  'EST',
  'ETH',
  'FIN',
  'FJI',
  'FLK',
  'FRA',
  'FRO',
  'FSM',
  'GAB',
  'GBR',
  'GEO',
  'GGY',
  'GHA',
  'GIB',
  'GIN',
  'GLP',
  'GMB',
  'GNB',
  'GNQ',
  'GRC',
  'GRD',
  'GRL',
  'GTM',
  'GUF',
  'GUM',
  'GUY',
  'HKG',
  'HMD',
  'HND',
  'HRV',
  'HTI',
  'HUN',
  'IDN',
  'IMN',
  'IND',
  'IOT',
  'IRL',
  'IRN',
  'IRQ',
  'ISL',
  'ISR',
  'ITA',
  'JAM',
  'JEY',
  'JOR',
  'JPN',
  'KAZ',
  'KEN',
  'KGZ',
  'KHM',
  'KIR',
  'KNA',
  'KOR',
  'KWT',
  'LAO',
  'LBN',
  'LBR',
  'LBY',
  'LCA',
  'LIE',
  'LKA',
  'LSO',
  'LTU',
  'LUX',
  'LVA',
  'MAC',
  'MAF',
  'MAR',
  'MCO',
  'MDA',
  'MDG',
  'MDV',
  'MEX',
  'MHL',
  'MKD',
  'MLI',
  'MLT',
  'MMR',
  'MNE',
  'MNG',
  'MNP',
  'MOZ',
  'MRT',
  'MSR',
  'MTQ',
  'MUS',
  'MWI',
  'MYS',
  'MYT',
  'NAM',
  'NCL',
  'NER',
  'NFK',
  'NGA',
  'NIC',
  'NIU',
  'NLD',
  'NOR',
  'NPL',
  'NRU',
  'NZL',
  'OMN',
  'PAK',
  'PAN',
  'PCN',
  'PER',
  'PHL',
  'PLW',
  'PNG',
  'POL',
  'PRI',
  'PRK',
  'PRT',
  'PRY',
  'PSE',
  'PYF',
  'QAT',
  'REU',
  'ROU',
  'RUS',
  'RWA',
  'SAU',
  'SDN',
  'SEN',
  'SGP',
  'SGS',
  'SHN',
  'SJM',
  'SLB',
  'SLE',
  'SLV',
  'SMR',
  'SOM',
  'SPM',
  'SRB',
  'SSD',
  'STP',
  'SUR',
  'SVK',
  'SVN',
  'SWE',
  'SWZ',
  'SXM',
  'SYC',
  'SYR',
  'TCA',
  'TCD',
  'TGO',
  'THA',
  'TJK',
  'TKL',
  'TKM',
  'TLS',
  'TON',
  'TTO',
  'TUN',
  'TUR',
  'TUV',
  'TWN',
  'TZA',
  'UGA',
  'UKR',
  'UMI',
  'URY',
  'USA',
  'UZB',
  'VAT',
  'VCT',
  'VEN',
  'VGB',
  'VIR',
  'VNM',
  'VUT',
  'WLF',
  'WSM',
  'YEM',
  'ZAF',
  'ZMB',
  'ZWE',
];
// Business name
export const referrerBusinessName = {
  type: 'object',
  properties: {
    businessName: { type: 'string', required: true },
  },
};

const location = {
  address: { type: 'string', required: true },
  country: { type: 'string', required: true },
  city: { type: 'string', required: true },
  state: { type: 'string', required: true },
  zipCode: { type: 'string', required: true },
};

// 1. Primary contact info
export const primaryContactDetails = {
  type: 'object',
  properties: {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    email: {
      type: 'string',
      pattern: '^\\S+@\\S+\\.\\S+$',
      format: 'email',
      required: true,
    },
    phoneNumber: { type: 'string', required: true },
  },
};

export const OfficerContactDetails = {
  type: 'object',
  properties: {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    title: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    email: {
      type: 'string',
      pattern: '^\\S+@\\S+\\.\\S+$',
      format: 'email',
      required: true,
    },
    birthDate: { type: 'string', required: true },
    SSN: { type: 'string', pattern: '^\\d{9}$', required: true },
    countryOfCitizenship: { type: 'string', enum: countryCode, required: true },
    homeAddress: location,
  },
};

const beneficialEntity = {
  type: 'object',
  properties: {
    legalName: { type: 'string' },
    ownershipPercent: { type: 'string' },
    entityType: { type: 'string' },
    ticketSymbol: { type: 'string' },
    EINType: { type: 'string' },
    EIN: { type: 'string' },
    address: location,
  },
};

const beneficialIndividual = {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    isPersonalGuarantor: { type: 'string' },
    title: { type: 'string' },
    ownershipPercent: { type: 'string' },
    phone: { type: 'string' },
    email: {
      type: 'string',
      pattern: '^\\S+@\\S+\\.\\S+$',
      format: 'email',
    },
    birthDate: { type: 'string' },
    SSN: { type: 'string', pattern: '^\\d{9}$' },
    countryOfCitizenship: { type: 'string', enum: countryCode },
    address: location,
  },
};


// 2. Business information
export const businessDetails = {
  type: 'object',
  properties: {
    businessLegalName: { type: 'string', required: true },
    DBANames: { type: 'array', items: { type: 'string' } },
    primaryPlatformURL: {
      type: 'string',
      format: 'uri',
      pattern: '^https?://',
      required: true,
    },
    primaryMarketURL: {
      type: 'string',
      format: 'uri',
      pattern: '^https?://',
    },
    additionalRelatedURLs: {
      type: 'string',
      format: 'uri',
      pattern: '^https?://',
      required: true,
    },
    entiTyType: {
      type: 'string',
      enum: ['LLC', 'Sole Proprietor', 'Partnership', 'Private Corporation', 'Public Corporation', 'Other'],
      required: true,
    },
    otherEntityType: { type: 'strimg' },
    taxId: { type: 'string', required: true },
    tickerSymbol: { type: 'string', required: true },
    businessFormationDate: { type: 'string', required: true },
    businessAddress: location,
    sameBusinessAndMailingAddress: { type: 'string', enum: ['Yes', 'No'], required: true },
    mailingAddress: location,
    platformLocation: {
      type: 'string',
      enum: ['Retail Storefront', 'Internet', 'Business Office', 'Private Residence', 'Bank', 'Other'],
      required: true,
    },
    otherPlatformLocation: { type: 'string' },
    verticalsServed: { type: 'string' },
    isCurrentlyOfferingPayments: { type: 'string', enum: ['Yes', 'No'], required: true },
    listBanksOrPaymentProcessors: { type: 'string' },
  },
  allOf: [
    {
      if: {
        properties: { sameBusinessAndMailingAddress: { const: 'No' } },
      },
      then: { required: ['mailingAddress'] },
    },
    {
      if: {
        properties: { platformLocation: { const: 'Other' } },
      },
      then: { required: ['otherPlatformLocation'] },
    },
    {
      if: {
        properties: { entiTyType: { const: 'Other' } },
      },
      then: { required: ['otherEntityType'] },
    },
    {
      if: {
        properties: { isCurrentlyOfferingPayments: { const: 'Yes' } },
      },
      then: { required: ['listBanksOrPaymentProcessors'] },
    },
  ],
};

// 3. Ownership/Partner Details
export const businessPartners = {
  type: 'object',
  properties: {
    hasIndividualsWith25PercentOrMoreEquity: { type: 'string', enum: ['Yes', 'NO'], required: true },
    // conditional
    numberOfIndividualsWith25PercentOrMoreEquity: { type: 'number' },
    beneficialOwnerShip: { type: 'string', enum: ['Individual', 'Entity'] },
    beneficialOwnerEntity: {
      type: 'array',
      items: {
        primaryBeneficial: beneficialEntity,
        secondaryBeneficial: {
          type: 'object',
          properties: {
            hasIndividualsWith25PercentOrMoreEquity: { type: 'string', enum: ['Yes', 'NO'], required: true },
            numberOfIndividualsWith25PercentOrMoreEquity: { type: 'number' },
            secondaryBeneficialOwnerShip: { type: 'string', enum: ['Individual', 'Entity'] },
            secondaryBeneficialList: {
              type: 'array',
              items: beneficialIndividual,
            },
          },
          allOf: [
            {
              if: {
                properties: { hasIndividualsWith25PercentOrMoreEquity: { const: 'Yes' } },
              },
              then: { required: ['numberOfIndividualsWith25PercentOrMoreEquity', 'secondaryBeneficialOwnerShip'] },
            },
            {
              if: {
                properties: { beneficialOwnerShip: { const: 'Individual' } },
              },
              then: { required: ['secondaryBeneficialList'] },
            },
          ],
        },
      },
    },
    beneficialOwnerIndividual: {
      type: 'array',
      items: beneficialIndividual,
    },
    ownerIsAlsoCompanyOfficer: { type: 'string', enum: ['Yes', 'NO'], required: true },
    // conditional
    nameOfCompanyOfficerAndOwner: { type: 'string' },
    // conditional
    noneOwnerCompanyOfficerDetails: OfficerContactDetails,
  },
  allOf: [
    {
      if: {
        properties: { hasIndividualsWith25PercentOrMoreEquity: { const: 'Yes' } },
      },
      then: { required: ['numberOfIndividualsWith25PercentOrMoreEquity', 'beneficialOwnerShip'] },
    },
    {
      if: {
        properties: { beneficialOwnerShip: { const: 'Entity' } },
      },
      then: { required: ['beneficialOwnerEntity'] },
      else: { required: ['beneficialOwnerIndividual'] },
    },
    {
      if: {
        properties: { ownerIsAlsoCompanyOfficer: { const: 'Yes' } },
      },
      then: { required: ['nameOfCompanyOfficerAndOwner'] },
      else: { required: ['noneOwnerCompanyOfficerDetails'] },
    },
  ],
};

// 4. Platform Service/ Data Security/ Third Party details
export const platformServiceAndDataSecurity = {
  type: 'object',
  properties: {
    businessFunctions: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['SalesAnd Solicitation', 'Customer Service', 'Terminal Deployment',
          'ChargeBack And Retrievals', 'Gateway Services'],
      },
      required: true,
    },

    customerSupportProcess: { type: 'string', required: true },
    KYCProcess: { type: 'string', required: true },
    additionalInfo: { type: 'string' },

    // PCI-DSS
    haveAccessToCardHolderData: { type: 'string', enum: ['Yes', 'NO'], required: true },
    isPCIDSSCompliantOrCertified: { type: 'string', enum: ['Yes', 'NO'], required: true },

    PCIDSSInformation: {
      type: 'object',
      properties: {
        vendorName: { type: 'string' },
        completionDate: { type: 'string' },
      },
    },
    haveThirdPartyCardDetailAccess: { type: 'string', enum: ['Yes', 'NO'], required: true },
    thirdPartyWithAccessToCardHolderData: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  allOf: [
    {
      if: {
        properties: { isPCIDSSCompliantOrCertified: { const: 'Yes' } },
      },
      then: { required: ['PCIDSSInformation'] },
    },
    {
      if: {
        properties: { haveThirdPartyCardDetailAccess: { const: 'Yes' } },
      },
      then: { required: ['thirdPartyWithAccessToCardHolderData'] },
    },
  ],
};


// 5 Suites, Liens, financial background and audits
export const legalAndFinancialCheck = {
  type: 'object',
  properties: {
    havePendingLegalOrFinancialIssue: { type: 'string', enum: ['Yes', 'NO'], required: true },
    explanationOnLegalOrFinancialIssue: { type: 'string' },
    haveConvictedOfficer: { type: 'string', enum: ['Yes', 'NO'], required: true },
    explanationOnConvictedOfficer: { type: 'string' },
    haveDoneCardAuditInLast3Years: { type: 'string', enum: ['Yes', 'NO'], required: true },
    explanationOnCardAudit: { type: 'string' },
  },
  allOf: [
    {
      if: {
        properties: { havePendingLegalOrFinancialIssue: { const: 'Yes' } },
      },
      then: { required: ['explanationOnLegalOrFinancialIssue'] },
    },
    {
      if: {
        properties: { haveConvictedOfficer: { const: 'Yes' } },
      },
      then: { required: ['explanationOnConvictedOfficer'] },
    },
    {
      if: {
        properties: { haveDoneCardAuditInLast3Years: { const: 'Yes' } },
      },
      then: { required: ['explanationOnCardAudit'] },
    },
  ],
};

// 6. Merchant Portfolio

export const merchantPortfolio = {
  type: 'object',
  properties: {
    numberOfMonthlyApplicants: { type: 'number', required: true },
    percentageOfNewUsers: { type: 'number' },
    avgMerchantTicketSize: { type: 'number', required: true },
    monthlyVolumePerMerchants: { type: 'number', required: true },
    mottoProcessedCardd: { type: 'number', required: true },
    internetProcessedCardd: { type: 'number', required: true },
    emvProcessedCards: { type: 'number', required: true },
    willOfferECheckPaymentToUsers: { type: 'string', enum: ['Yes', 'NO'], required: true },
    cardPaymentsPercentage: { type: 'number' },
    eCheckPercentage: { type: 'number' },
    geoAreasCovered: {
      type: 'array',
      items: { type: 'string', enum: ['United State', 'Australia', 'Canada', 'New Zealand', 'Other'] },
      required: true,
    },
    explainOtherGeoAreasCovered: { type: 'string' },
    marketingSalesMethods: {
      type: 'array',
      items: { type: 'string', enum: ['Internet', 'Direct Sales', 'Tele-sales', 'Other'] },
      required: true,
    },
    merchantSiteVisitDetails: { type: 'string', required: true },
    thirdPartyMerchantsSalesChannelDetails: { type: 'string', required: true },
    numberOfMerchantsInExistingPortfolio: { type: 'number', required: true },
    numberOfMerchantsToBeTransitioned: { type: 'number', required: true },
    merchantsTransitionTimeFrame: { type: 'string', required: true },
    merchantCardSettlementTimeFrame: { type: 'string', required: true },
    merchantECheckSettlementTimeFrame: { type: 'string', required: true },
    top10MerchantsToSubmit: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    willSubmitUnpaidUserAsMerchants: { type: 'string', enum: ['Yes', 'NO'], required: true },
    percentageOfUnpaidUser: { type: 'number' },
    haveFreeSignupOnWeb: { type: 'string', enum: ['Yes', 'NO'] },
    explanationOfSignupProcess: { type: 'string' },
    costOfAccountOpening: { type: 'number', required: true },
    willSubmitMerchantsToPayrixPriorFeesBilling: { type: 'string', required: true },
    eCommercePaymentChannels: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['In-app payment / embedded check out process', 'Website checkout page', 'Other'],
      },
    },
    otherECommercePaymentChannel: { type: 'string' },
    hasECommerceTemplate: { type: 'string', enum: ['Yes', 'NO'], required: true },
    eCommercePaymentProcess: { type: 'string' },
    submittedMerchantHasRecurringBilling: { type: 'string', enum: ['Yes', 'NO'], required: true },
    merchantPaymentsAreAlreadyDelivered: { type: 'string', enum: ['Yes', 'NO'], required: true },
    percentageOfDelayedDelivery: { type: 'number' },
    durationOfPaymentAdvancePriorDelivery: { type: 'number' }, // time
    merchantSubmissionMethodToPayrix: {
      type: 'string',
      enum: ['Payrix Signup Forms', 'API Integration', 'Direct Portal Submission'],
      required: true,
    },
    merchantSignupProcess: { type: 'string', required: true },
  },
};

// 7. Supporting Documents
export const supportingDocuments = {
  type: 'object',
  properties: {
    proofOfBusiness: { type: 'string', enum: ['Attached', 'Not Available'], required: true },
    proofOfIdentity: { type: 'string', enum: ['Attached', 'Not Available'], required: true },
    financialDocuments: { type: 'string', enum: ['Attached', 'Not Available'], required: true },
  },
};

// Supporting Documents
export const supplementaryDocuments = {
  type: 'object',
  properties: {
    marketingMaterials: { type: 'string', enum: ['Attached', 'Not Available'], required: true },
    informationSecurity: { type: 'string', enum: ['Attached', 'Not Available'], required: true },
    platformPolicies: { type: 'string', enum: ['Attached', 'Not Available'], required: true },
    businessInsurance: { type: 'string', enum: ['Attached', 'Not Available'], required: true },
  },
};

// 8 eCommerce Requirements Acknowledgement
export const acknowledgement = {
  type: 'object',
  properties: {
    acknowledgementInitials: { type: 'string', required: true },
    acknowledgementDateTime: { type: 'string', required: true },
  },
};


export const Referrer = {
  title: 'Referrer',
  description: 'Referrer entity',
  type: 'object',
  properties: {
    uuid: { type: 'string', required: true },
    businessName: { type: 'string', required: true },
    primaryContactDetails,
    businessDetails,
    partnershipDetails: businessPartners,
    platformServiceAndDataSecurity,
    legalAndFinancialCheck,
    merchantPortfolio,
    documents: {
      type: 'object',
      properties: {
        supportingDocuments,
        supplementaryDocuments,
      },
    },
    acknowledgement,
  },
};
