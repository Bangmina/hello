const canvas = document.getElementById('previewCanvas');
const ctx = canvas.getContext('2d');

// 배경 이미지 로드
const backgrounds = {
  'bg1.jpg': './bg1.jpg',
  'bg2.jpg': './bg2.jpg',
  'bg3.jpg': './bg3.jpg',
};
let currentBackground = new Image();
currentBackground.src = backgrounds['bg1.jpg'];

// 초기 Canvas 설정
function initializeCanvas() {
  currentBackground.onload = () => {
    ctx.drawImage(currentBackground, 0, 0, canvas.width, canvas.height);
    drawText('Your custom text here', '#ffffff');
  };
}
initializeCanvas();

// 텍스트 렌더링
function drawText(text, color) {
  ctx.font = '40px Arial';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

// 입력 이벤트 연결
document.getElementById('textInput').addEventListener('input', (e) => {
  updateCanvas(e.target.value, document.getElementById('colorPicker').value);
});

document.getElementById('colorPicker').addEventListener('input', (e) => {
  updateCanvas(document.getElementById('textInput').value, e.target.value);
});

document.getElementById('backgroundPicker').addEventListener('change', (e) => {
  currentBackground.src = backgrounds[e.target.value];
  currentBackground.onload = () => {
    updateCanvas(
      document.getElementById('textInput').value,
      document.getElementById('colorPicker').value,
    );
  };
});

// Canvas 업데이트
function updateCanvas(text, color) {
  ctx.drawImage(currentBackground, 0, 0, canvas.width, canvas.height);
  drawText(text || 'Your custom text here', color);
}

// 이미지 다운로드 (수정된 부분)
document.getElementById('downloadButton').addEventListener('click', () => {
  // 이미지 URL 생성
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png'); // Canvas 내용을 PNG로 변환
  link.download = 'custom-wallpaper.png'; // 다운로드 파일 이름 설정
  document.body.appendChild(link); // 임시로 DOM에 추가
  link.click(); // 클릭 이벤트 트리거
  document.body.removeChild(link); // 링크 제거
});
