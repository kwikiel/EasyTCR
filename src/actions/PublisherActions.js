export function buyTokens (tokens) {
  return {
    type: 'BUY_TOKENS',
    tokens: tokens
  };
}

export function getTokens () {
  return {
    type: 'REQUEST_TOKEN_INFORMATION'
  };
}

export function sendTestTxs () {
  return {
    type: 'SEND_TEST_TXS'
  };
}

export function getPublisherDomains () {
  return {
    type: 'REQUEST_PUBLISHER_DOMAINS'
  };
}

export function applyDomain (name, tokens) {
  return {
    type: 'APPLY_DOMAIN',
    name,
    tokens
  };
}

export function hideTxQueue () {
  return {
    type: 'HIDE_TX_QUEUE'
  };
}
