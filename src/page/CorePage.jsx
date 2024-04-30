//중앙 레이아웃 jsx
import React, { useState, useEffect } from 'react';

const CorepageStyles ={
   //전체적인 영역 styles
  corePageStyle:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // 화면 전체 높이를 차지  
  },

  //중앙 영역 styles
  centralContentStyle: {
    width: "600px", // 중앙 컨텐츠의 너비를 100%로 설정하여 가로 전체 차지
    height:"2000px",
    display: 'flex',
    flexDirection: 'column', // 자식 요소를 세로로 배치
    alignItems: 'center', // 가운데 정렬
  },
  
  //사이드 영역 styles
  sideContentStyle : {
    flex: '1', // 나머지 영역을 균등하게 나눔
    backgroundColor: 'lightgrey', // 사이드 회색 배경
    height: "2000px", // 높이를 화면 전체로
    borderRight: "2px solid white",
    borderLeft: "2px solid white",
  },
  
  //이미지 크기 조절 styles
  imageWrapper: {
    width: '600px', // 이미지 wrapper의 너비를 100%로 설정
    height: '350px', // 이미지 wrapper의 높이를 300px로 설정
    borderRadius:"3px",
    marginTop:'48%',
    right:'0',
  },

  //추천메뉴 이미지 박스
  MenuBox : {
    width: "50%",
    height: "30%",
  },

  //추천 메뉴 영역 styles
  RecommendWrapper: {
    marginTop: '50px', // 위쪽 여백 설정
  },

  // 그리드 스타일
  gridContainer: {
    width: '600px', // 그리드 컨테이너의 너비를 중앙 컨텐츠와 동일하게 설정
    display: 'flex',
    justifyContent: 'center', // 가로 중앙 정렬
    flexWrap: 'wrap', // 그리드 아이템이 넘칠 경우 다음 줄로 넘어감
  },
  
  gridItem: {
    width: '200px', // 각 그리드 아이템의 너비를 150px로 설정
    height: 'auto', // 각 그리드 아이템의 높이를 자동으로 설정하여 이미지에 따라 조정
    marginBottom: '20px', // 각 그리드 아이템 간의 간격
    backgroundColor: 'white',
    display: 'flex', // 그리드 아이템을 가로 정렬
    flexDirection: 'column', // 그리드 아이템의 자식 요소를 세로로 정렬
    alignItems: 'center', // 그리드 아이템을 세로 중앙으로 정렬
  },
  
  gridImage: {
    width: '90%', // 이미지의 너비를 그리드 아이템에 맞게 100%로 설정
    height: 'auto', // 이미지의 높이를 자동으로 설정하여 가로 비율 유지
    objectFit: 'cover', // 이미지를 그리드 아이템에 맞게 자동 조정
    borderRadius: '5px',
  },
  
  // 버튼 스타일
  button: {
    display: 'block', // 버튼을 블록 요소로 설정하여 가로 너비를 100%로 설정
    width: '90px', // 버튼의 가로 너비
    height: '20px', // 버튼의 세로 높이
    color:'white',
    backgroundColor: 'black', // 버튼 배경색
    border: '3px solid black',
    borderRadius: '5px',
    marginTop: '10px', // 위쪽 여백 설정
    fontSize: '12px',
  },

  //팝업 스타일
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    zIndex: '999',
  },

  popupInner: {
    textAlign: 'center',
  },
};



// 이미지 슬라이드 코드
const ImageSlide = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, [currentSlide]); // currentSlide가 변경될 때마다 useEffect 실행

  return (
    <div className="image-slider" style={CorepageStyles.imageWrapper}>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} style={CorepageStyles.imageWrapper}/>
    </div>
  );
};


// 팝업 컴포넌트
const Popup = ({ handleClose, popupContent }) => {
  if (!popupContent) return null;

  return (
    <div className="popup" style={CorepageStyles.popup}>
      <div className="popup-inner" style={CorepageStyles.popupInner}>
        <button className="close-button" onClick={handleClose}>
          닫기
        </button>
        <p>{popupContent}</p>
      </div>
    </div>
  );
};

// 중앙 영역 코드
function CorePage(props) {
  // 이미지 슬라이드
  const imagesSlide = [
    'src/image/slide/slide1.png',
    '/image/slide/slide2.png',
    '/image/slide/slide3.png',
  ];

  // 한식 그리드 데이터
  const KoreanGridData = [
    {
      image: '/image/grid/grid1.png',
      buttonText: '잡채',
      popupContent: '잡채 레시피 내용',
    },
    {
      image: '/image/grid/grid2.png',
      buttonText: '갈비찜',
      popupContent: '갈비찜 레시피 내용',
    },
    {
      image: '/image/grid/grid3.png',
      buttonText: '김치찌개',
      popupContent: '김치찌개 레시피 내용',
    },
    {
      image: '/image/grid/grid4.png',
      buttonText: '된장찌개',
      popupContent: '된장찌개 레시피 내용',
    },
    {
      image: '/image/grid/grid5.png',
      buttonText: '비빔밥',
      popupContent: '비빔밥 레시피 내용',
    },
    {
      image: '/image/grid/grid6.png',
      buttonText: '떡볶이',
      popupContent: '떡볶이 레시피 내용',
    },
  ];

  // 양식 그리드 데이터
  const EuropeanGridData = [
    {
      image: '/image/grid/grid7.png',
      buttonText: '파스타',
      popupContent: '파스타 레시피 내용',
    },
    {
      image: '/image/grid/grid8.png',
      buttonText: '리조또',
      popupContent: '리조또 레시피 내용',
    },
    {
      image: '/image/grid/grid9.png',
      buttonText: '스테이크',
      popupContent: '스테이크 레시피 내용',
    },
    {
      image: '/image/grid/grid10.png',
      buttonText: '감바스',
      popupContent: '감바스 레시피 내용',
    },
    {
      image: '/image/grid/grid11.png',
      buttonText: '그라탕',
      popupContent: '그라탕 레시피 내용',
    },
    {
      image: '/image/grid/grid12.png',
      buttonText: '후렌치후라이',
      popupContent: '후렌치후라이 레시피 내용',
    },
  ];

  // 양식 그리드 데이터
  const JapaneseGridData = [
    {
      image: '/image/grid/grid13.png',
      buttonText: '초밥',
      popupContent: '초밥 레시피 내용',
    },
    {
      image: '/image/grid/grid14.png',
      buttonText: '오코노미야끼',
      popupContent: '오코노미야끼 레시피 내용',
    },
    {
      image: '/image/grid/grid15.png',
      buttonText: '텐동',
      popupContent: '텐동 레시피 내용',
    },
    {
      image: '/image/grid/grid16.png',
      buttonText: '라멘',
      popupContent: '라멘 레시피 내용',
    },
    {
      image: '/image/grid/grid17.png',
      buttonText: '규동',
      popupContent: '규동 레시피 내용',
    },
    {
      image: '/image/grid/grid18.png',
      buttonText: '모츠나베',
      popupContent: '모츠나베 레시피 내용',
    },
  ];

  // 페이지 상태 관리
  const [currentKoreanPage, setCurrentKoreanPage] = useState(0);
  const [currentEuropeanPage, setCurrentEuropeanPage] = useState(0);
  const [currentJapanesePage, setCurrentJapanesePage] = useState(0);

  // 팝업 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  
  // 페이지 이동 함수
  const handleKoreanPageChange = (pageNumber) => {
    setCurrentKoreanPage(pageNumber);
  };

  const handleEuropeanPageChange = (pageNumber) => {
    setCurrentEuropeanPage(pageNumber);
  };

  const handleJapanesePageChange = (pageNumber) => {
    setCurrentJapanesePage(pageNumber);
  };


  // 페이지당 그리드 아이템 개수
  const itemsPerPage = 3;

  // 현재 페이지의 한식 그리드 아이템
  const currentKoreanGridData = KoreanGridData.slice(
    currentKoreanPage * itemsPerPage,
    (currentKoreanPage + 1) * itemsPerPage
  );

  // 현재 페이지의 양식 그리드 아이템
  const currentEuropeanGridData = EuropeanGridData.slice(
    currentEuropeanPage * itemsPerPage,
    (currentEuropeanPage + 1) * itemsPerPage
  );

  // 현재 페이지의 일식 그리드 아이템
  const currentJapaneseGridData = JapaneseGridData.slice(
    currentJapanesePage * itemsPerPage,
    (currentJapanesePage + 1) * itemsPerPage
  );

  // 팝업 열기 함수
  const handleOpenPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  // 팝업 닫기 함수
  const handleClosePopup = () => {
    setPopupContent('');
    setIsPopupOpen(false);
  };

  // 그리드 아이템 컴포넌트
  const GridItem = ({ image, buttonText, popupContent }) => {
    const handleButtonClick = () => {
      handleOpenPopup(popupContent);
    };

    return (
      <div style={CorepageStyles.gridItem}>
        <img src={image} alt="grid" style={CorepageStyles.gridImage} />
        <button onClick={handleButtonClick} style={CorepageStyles.button}>
          {buttonText}
        </button>
      </div>
    );
  };

  return (
    <div style={CorepageStyles.corePageStyle}>
      <div style={CorepageStyles.sideContentStyle}></div>
  
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* 중앙 지역의 내용 */}

        <div style={CorepageStyles.centralContentStyle}>
          {/* 이미지 슬라이드 */}
          <ImageSlide images={imagesSlide} />
  
          {/* Recommended Recipe */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'45%'}}>
              <div style={CorepageStyles.RecommendWrapper}>
              <h3 style={{textAlign: "left",fontSize:"18px",fontFamily :"monospace"}}>Recommended Recipe</h3>
            </div>
  
            {/* 팝업 */}
            <Popup handleClose={handleClosePopup} popupContent={popupContent} />


            {/* 한식 그리드 */}
            <div style={CorepageStyles.RecommendWrapper}>
              <h4>Korean Cuisine</h4>
            </div>

            <div style={CorepageStyles.gridContainer}>
              {/* 모듈 구현 */}
              {currentKoreanGridData.map((data, index) => (
                <div key={index} style={CorepageStyles.gridItem}>
                  <img src={data.image} alt={`grid${index}`} style={CorepageStyles.gridImage} />
                  <button type='button' style={CorepageStyles.button} onClick={() => handleOpenPopup(data.popupContent)}>
                    {data.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* 한식 그리드 페이지 버튼 */}
            <div>
              {Array.from({ length: Math.ceil(KoreanGridData.length / itemsPerPage) }, (_, i) => (
                <button key={i} onClick={() => handleKoreanPageChange(i)} style={{background:'white', border: 'none', color: currentKoreanPage === i ? 'red' : 'black'}}>
                  {i + 1}
                </button>
              ))}
            </div>
  

            {/* 유럽 음식 그리드 */}
            <div style={CorepageStyles.RecommendWrapper}>
              <h4>European Cuisine</h4>
            </div>
            <div style={CorepageStyles.gridContainer}>
              {/* 모듈 구현 */}
              {currentEuropeanGridData.map((data, index) => (
                <div key={index} style={CorepageStyles.gridItem}>
                  <img src={data.image} alt={`grid${index}`} style={CorepageStyles.gridImage}/>
                  <button type='button' style={CorepageStyles.button} onClick={() => handleOpenPopup(data.popupContent)}>
                    {data.buttonText}
                  </button>
                </div>
              ))}
            </div>
            {/* 양식 그리드 페이지 버튼 */}
            <div>
            {Array.from({ length: Math.ceil(EuropeanGridData.length / itemsPerPage) }, (_, i) => ( //배열을 이용한 페이지 구현
              <button key={i} onClick={() => handleEuropeanPageChange(i)} style={{background:'white', border: 'none', color: currentEuropeanPage === i ? 'red' : 'black'}}>
                  {i + 1}
              </button>

              ))}
            </div>


            {/* 일식 음식 그리드 */}
            <div style={CorepageStyles.RecommendWrapper}>
              <h4>Japanese Cuisine</h4>
            </div>
            <div style={CorepageStyles.gridContainer}>
              {/* 모듈 구현 */}
              {currentJapaneseGridData.map((data, index) => (
                <div key={index} style={CorepageStyles.gridItem}>
                  <img src={data.image} alt={`grid${index}`} style={CorepageStyles.gridImage}/>
                  <button type='button' style={CorepageStyles.button} onClick={() => handleOpenPopup(data.popupContent)}>
                    {data.buttonText}
                  </button>
                </div>
              ))}
            </div>
            {/* 일식 그리드 페이지 버튼 */}
            <div>
            {Array.from({ length: Math.ceil(JapaneseGridData.length / itemsPerPage) }, (_, i) => ( //배열을 이용한 페이지 구현
              <button key={i} onClick={() => handleJapanesePageChange(i)} style={{background:'white', border: 'none', color: currentJapanesePage === i ? 'red' : 'black'}}>
                  {i + 1}
              </button>

              ))}
            </div>

          </div>
        </div>
      </div>
  
      <div style={CorepageStyles.sideContentStyle}></div>
    </div>  
  );  
}

export default CorePage;

