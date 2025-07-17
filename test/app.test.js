const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('loads index.html and verifies banner and console message', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
  const { window } = dom;
  global.window = window;
  global.document = window.document;

  const logMock = jest.spyOn(console, 'log').mockImplementation(() => {});

  require(path.join('..', 'script.js'));

  const bannerTitle = window.document.querySelector('.banner-title').textContent;
  expect(bannerTitle).toContain('Destaque de Hoje');

  window.document.dispatchEvent(new window.Event('DOMContentLoaded'));

  expect(logMock).toHaveBeenCalledWith('LeonFlix está pronto!');
  logMock.mockRestore();
});
