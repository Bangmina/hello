# 라이브러리 준비하기
import csv
import requests
from bs4 import BeautifulSoup

url ="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%95%84%EC%9D%B4%ED%8F%B0&oquery=%EC%B4%88%EC%BD%94%EC%B9%A9%EC%BF%A0%ED%82%A4&tqi=ircLcsqo1SCssuKi%2FDdssssst1d-006777"

# 엑셀 파일로 저장하기
filename = "네이버쇼핑_아이폰.csv"
f = open(filename, "w", encoding="utf-8-sig", newline="")
writer = csv.writer(f)

columns_name = ["순서","제품명", "가격"] # 컬럼 속성명 만들기

writer.writerow(columns_name)

# 웹 서버에 요청하기
res = requests.get(url)
res.raise_for_status()

# soup 객체 만들기
soup = BeautifulSoup(res.text, "lxml")

# productBox = soup.find('ul', attrs={"class": "type_nogap"}) # 전체 영역에서 'a' 태그를 찾지 않고 인기 급상승 영역으로 범위 제한
# products = productBox.find_all('a', attrs={"class": "title"}) # 인기 급상승 영역에서 'a'태그 모두 찾아 변수 products에 할당
# Prices = productBox.find_all('strong')
productBox = soup.select('ul.type_nogap') # 전체 영역에서 'a' 태그를 찾지 않고 인기 급상승 영역으로 범위 제한
products = soup.select('a.title') # 인기 급상승 영역에서 'a'태그 모두 찾아 변수 products에 할당

prices = soup.select('a.title strong')
print(prices)
exit()


# productPrice = productPriceBox.find('strong',attrs={"class": ""})

i = 1

# 반복문으로 제목 가져오기(터미널 창 출력 및 엑셀 저장)
# for product in products: 
#   title = product.get_text()
#   print(f"{[i]} {title} : {[i]}")
#   data = [{title}, [i]]
#   writer.writerow(data)
#   i += 1


for i, (product, price) in enumerate(zip(products, prices)):
  title = product.get_text().strip()
  price_text = price.get_text().strip()
  print(f"{[i]} {title} : {price_text}원")
  data = [i,title, price_text+'원']
  writer.writerow(data)