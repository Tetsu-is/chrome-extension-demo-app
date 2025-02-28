type MockMessage = {
  message: string;
};

type MockResponse = {
  message: string;
};

function sendMessage(
  message: MockMessage,
  callback?: (response: MockResponse) => void
) {
  const response: MockResponse = {
    message: "Hello from background!",
  };
  if (callback) {
    callback(response);
  }
  return true;
}

export function newMockChrome(): any {
  return {
    ...chrome,
    runtime: {
      ...chrome.runtime,
      sendMessage: sendMessage,
    },
  };
}
