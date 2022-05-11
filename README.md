 # Lirc 사용방법

예시를 위하여 AKB75735408.lircd.conf 및 node.js를 이용하여 3초에 한번씩 on 신호와 off를 번갈아가며 작동하는 예제 첨부

## 사전준비

[클릭](https://blog.aliencube.org/ko/2020/08/12/turning-raspberry-pi-into-remote-controller/) 하여 모듈 설정까지 완료하기

node.js 및 npm 설치


### lircd.conf 불러오기

    sudo cp <모델명>.lircd.conf /etc/lirc/lircd.conf.d/<모델명>.lircd.conf
라이브러리 파일을 lirc에서 읽을 수 있도록 복사

    sudo /etc/init.d/lircd reload
재시작하여 라이브러리 불러오기

    sudo /etc/init.d/lircd stop
데몬을 종료시켜서 송신준비 ( 데몬이 켜져있으면 작동할 수 없다고 함. )
# 송신하기

### terminal
    irsend LIST "" ""
   현재 등록된 컨트롤러명 확인
	   

    irsend LIST <모델명> ""
  특정 컨트롤러의 등록된 동작명 확인
  

    irsend SEND_ONCE <모델명
    > <동작명>
   특정 컨트롤의 특정 동작 실행

### node.js (프로젝트의 루트 디렉토리)

    npm install
   실행하는데 필요한 라이브러리 설치
   

    node index.js
   실행

#### p.s index.js 속 'whisen' = \<모델명>, 'on' / 'off' == \<동작명>
#### 터미널을 통해 리스트에서 각각 이름 확인 후 수정하여 재사용 가능 
## 수신값 확인

    sudo mode2 -m -d /dev/lirc1
   수신값을 확인하여 발신기와 수신기가 정상인지 확인가능
   수신값이 뜨지않으면 수신기가 불량인지 확인해볼 것



## 참고
### conf 파일 찾기
[Source Forge](http://lirc-remotes.sourceforge.net/remotes-table.html) 에서 찾을 수 있으며 없을 경우 직접 만들기 (참고 사이트 이용)

### 참고 사이트
[# Source Forge](http://lirc-remotes.sourceforge.net/remotes-table.html) <br>
[# 라즈베리 파이를 리모트 콘트롤러로 활용하기](https://blog.aliencube.org/ko/2020/08/12/turning-raspberry-pi-into-remote-controller/) <br>
[# How to Control Your Air Conditioner with Raspberry Pi Board and ANAVI Infrared pHAT](https://www.cnx-software.com/2017/03/12/how-to-control-your-air-conditioner-with-raspberry-pi-board-and-anavi-infrared-phat/) <br>
[# 라즈베리파이로 리모컨을 제어하자 - 1편 LIRC 업데이트 (20년12월 업데이트)](https://blog.daum.net/p00q/180) <br>
[  **\[Bullseye/Buster/Stretch\]** Using LIRC on gpio-ir with kernel 4.19 or later](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=235256) <br>
