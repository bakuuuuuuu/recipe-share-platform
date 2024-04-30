const CorepageStyles = {
    corePageStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // 화면 전체 높이를 차지
    },
    centralContentStyle: {
      width: '800px', // 중앙 영역의 가로 너비 조정
      backgroundColor: 'white', // 중앙 영역의 배경색
      padding: '20px', // 내부 여백
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 그림자 효과 추가
      borderRadius: '8px', // 모서리를 둥글게 만듦
      
    },
    sideContentStyle : {
      flex: '1', // 나머지 영역을 균등하게 나눔
      backgroundColor: 'lightgrey', // 사이드 회색 배경
      height: '100%', // 높이를 화면 전체로
    },
  

    formStyle: {
      display: 'flex',
      flexDirection: 'column',
      
    },
    inputStyle: {
      marginBottom: '15px',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      outline: 'none',
    },
    buttonStyle: {
      padding: '10px 20px',
      fontSize: '14px',
      backgroundColor: '#2e8b57',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };
  
  export default CorepageStyles;