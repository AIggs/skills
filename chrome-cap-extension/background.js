chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['cap.js']
    });
    console.log('Cap浮动工具已启动');
  } catch (error) {
    console.error('Cap启动失败:', error);
  }
});
