import csv
import requests
from bs4 import BeautifulSoup

url ="https://news.naver.com/"

# 엑셀 파일로 저장하기
filename = "뉴스제목.csv"
f = open(filename, "w", encoding="utf-8-sig", newline="")
writer = csv.writer(f)

columns_name = ["날짜","뉴스 제목",] # 컬럼 속성명 만들기

writer.writerow(columns_name)

# 웹 서버에 요청하기
res = requests.get(url)
res.raise_for_status()

# soup 객체 만들기
soup = BeautifulSoup(res.text, "lxml")

newsTit = soup.select('ul.cc_text_list li a')
print(newsTit);