const questions = [
    { question: "전류는 전자의 흐름이다.", answer: true },
    { question: "옴의 법칙에서 전압은 전류와 반비례한다.", answer: false },
    { question: "직류회로에서 저항이 증가하면 전류는 감소한다.", answer: true },
    { question: "전압은 단위 부피당 전자의 양을 의미한다.", answer: false },
    { question: "저항의 단위는 옴(Ω)이다.", answer: true },
    { question: "직류는 흐르는 방향이 변하지 않는 전류를 말한다.", answer: true },
    { question: "교류는 주파수에 따라 주기적으로 방향이 바뀌는 전류이다.", answer: true },
    { question: "전력은 전류와 전압의 곱으로 구할 수 있다.", answer: true },
    { question: "한 개의 저항이 포함된 회로를 직렬 회로라고 한다.", answer: false },
    { question: "전류가 흐를 때 전선은 항상 온도가 상승한다.", answer: true },
    { question: "전류가 클수록 전자기장이 강해진다.", answer: true },
    { question: "전기기기에서 코일의 감은 횟수가 많을수록 자기장이 약해진다.", answer: false },
    { question: "변압기는 전압을 변환하는 장치이다.", answer: true },
    { question: "교류 회로에서 인덕턴스는 전압의 위상을 지연시킨다.", answer: true },
    { question: "전류는 회로의 단락 상태에서 가장 크게 흐른다.", answer: true },
    { question: "전선의 단면적이 클수록 저항이 증가한다.", answer: false },
    { question: "전동기는 전기에너지를 기계에너지로 변환하는 장치이다.", answer: true },
    { question: "발전기는 기계에너지를 전기에너지로 변환한다.", answer: true },
    { question: "피복이 손상된 전선은 누전 위험이 높다.", answer: true },
    { question: "직렬 회로에서 전류는 각 부품마다 다르게 흐른다.", answer: false },
    { question: "병렬 회로에서 각 분기의 전압은 동일하다.", answer: true },
    { question: "옴의 법칙은 V=IR로 표현된다.", answer: true },
    { question: "전류는 단위 시간당 흐르는 전하량으로 정의된다.", answer: true },
    { question: "교류 주파수가 높을수록 교류 전압의 변화 속도가 느려진다.", answer: false },
    { question: "도체는 전류를 잘 전달하는 물질이다.", answer: true },
    { question: "절연체는 전류가 거의 흐르지 않는 물질이다.", answer: true },
    { question: "전류계는 전압을 측정하는 장치이다.", answer: false },
    { question: "코일의 인덕턴스가 클수록 전류 변화에 저항이 증가한다.", answer: true },
    { question: "다이오드는 직류 전류를 차단한다.", answer: false },
    { question: "LED는 발광 다이오드로, 빛을 방출한다.", answer: true },
    { question: "직렬 회로에서 전체 저항은 각 저항의 합과 같다.", answer: true },
    { question: "배터리는 직류 전원을 공급하는 장치이다.", answer: true },
    { question: "변압기의 1차 코일과 2차 코일은 전기적으로 연결되어 있다.", answer: false },
    { question: "퓨즈는 과전류로부터 회로를 보호하는 장치이다.", answer: true },
    { question: "교류 전원에서는 주파수의 단위가 헬츠(Hz)이다.", answer: true },
    { question: "누전 차단기는 전기 기기에서 발생하는 누전을 차단한다.", answer: true },
    { question: "전압이 일정한 회로에서는 전류와 저항이 반비례한다.", answer: true },
    { question: "전기 설비의 배선은 항상 병렬로 연결된다.", answer: true },
    { question: "변압기의 효율은 출력 전력과 입력 전력의 비율로 구할 수 있다.", answer: true },
    { question: "접지선은 전기를 땅으로 흘려보내는 역할을 한다.", answer: true },
    { question: "전선의 길이가 길어질수록 저항은 감소한다.", answer: false },
    { question: "대지 전압은 지구와 전압 차를 의미한다.", answer: true },
    { question: "모터의 효율은 기계적 출력과 전기적 입력의 비율로 나타낸다.", answer: true },
    { question: "전구의 수명이 다해도 일부 전류는 흐를 수 있다.", answer: false },
    { question: "교류 회로에서 리액턴스는 전류의 흐름을 방해한다.", answer: true },
    { question: "정전기는 대전된 물체에 축적된 전기이다.", answer: true },
    { question: "콘덴서는 전류의 흐름을 방해하지 않는다.", answer: false },
    { question: "정류기는 교류를 직류로 변환한다.", answer: true },
    { question: "전해 콘덴서는 극성이 없다.", answer: false },
    { question: "안전 접지는 전기 기기의 금속 부분에 연결된다.", answer: true },
    { question: "전선의 피복은 전기를 잘 전달하기 위해 사용된다.", answer: false },
    { question: "LED는 고체 상태의 빛을 방출하는 다이오드이다.", answer: true },
    { question: "변압기 1차 측의 전류가 크면, 2차 측의 전압도 크다.", answer: false },
    { question: "과부하는 전류가 초과하여 발생하는 상태를 의미한다.", answer: true },
    { question: "가정용 교류 전원은 220V이다.", answer: true },
    { question: "동기 발전기는 일정한 주파수의 교류를 발생시킨다.", answer: true },
    { question: "절연 저항이 낮을수록 안전하다.", answer: false },
    { question: "전기 사고 예방을 위해 정기적인 점검이 필요하다.", answer: true },
    { question: "차단기는 고장이 발생한 회로를 차단한다.", answer: true },
    { question: "상전압은 상 사이의 전압이다.", answer: false },
    { question: "대지 전압은 전선과 지면 사이의 전압이다.", answer: true },
    { question: "역률이 낮으면 전력 손실이 증가한다.", answer: true },
    { question: "동기 발전기는 자기장에서 전기를 발생시킨다.", answer: true },
    { question: "변압기 코일 간에는 자기 유도가 일어난다.", answer: true },
    { question: "배선 공사는 안전 규정을 준수해야 한다.", answer: true },
    { question: "전류는 도체 내에서 빛의 속도로 이동한다.", answer: false },
    { question: "전기기기는 접지가 필요하지 않다.", answer: false },
    { question: "접지는 누전 시 전류를 대지로 흘려보내 위험을 줄인다.", answer: true },
    { question: "직류 회로의 저항은 주파수에 영향을 받지 않는다.", answer: true },
    { question: "피뢰기는 전기를 피하는 장치이다.", answer: false },
    { question: "교류 전류는 주기적으로 방향이 바뀐다.", answer: true },
    { question: "전선의 저항이 커지면 전력 손실도 커진다.", answer: true },
    { question: "전류는 항상 회로를 통해 완전히 흐른다.", answer: false },
    { question: "배선이 잘못되면 전기 사고의 원인이 될 수 있다.", answer: true },
    { question: "옥내 배선 공사는 항상 보호관을 사용해야 한다.", answer: true },
    { question: "용접 작업 시 보호 장비를 착용해야 한다.", answer: true },
    { question: "전기 기기는 물에 젖으면 안전하다.", answer: false },
    { question: "차단기와 퓨즈는 과전류 보호 장치이다.", answer: true },
    { question: "전선의 굵기는 전류 용량과 관계없다.", answer: false },
    { question: "전류는 저항이 없는 경로로 흐르려는 성질이 있다.", answer: true },
    { question: "전선의 절연이 벗겨지면 누전 위험이 높아진다.", answer: true },
    { question: "단락 회로에서는 전류가 흐르지 않는다.", answer: false },
    { question: "직렬 회로에서는 전체 저항이 각 저항의 합과 같다.", answer: true },
    { question: "병렬 회로의 전체 저항은 각 저항보다 작다.", answer: true },
    { question: "도체는 저항이 크기 때문에 전류를 잘 전달하지 않는다.", answer: false },
    { question: "유도 전동기는 자기 유도 현상을 이용한다.", answer: true },
    { question: "리액턴스는 전기저항의 일종이다.", answer: true },
    { question: "정전기 유도는 금속 물체에서도 발생할 수 있다.", answer: true },
    { question: "변압기의 전압 변환 비율은 코일의 감은 수에 비례한다.", answer: true },
    { question: "피뢰기는 번개에 의해 발생하는 과전압을 보호한다.", answer: true },
    { question: "전기 충격은 전압에 비례해 위험성이 증가한다.", answer: true },
    { question: "배선용 차단기는 일정 전류 이상에서 자동으로 차단한다.", answer: true },
    { question: "부하가 걸리면 전압 강하가 발생할 수 있다.", answer: true },
    { question: "차단기는 고장이 발생해도 회로를 유지한다.", answer: false },
    { question: "전기설비는 누전 차단기가 반드시 설치되어야 한다.", answer: true },
    { question: "고압 전선은 절연이 필요 없다.", answer: false },
    { question: "LED 조명은 전기에너지를 빛으로 변환한다.", answer: true },
    { question: "전동기는 보통 열이 발생하지 않는다.", answer: false },
    { question: "직류 모터는 속도 제어가 용이하다.", answer: true },
    { question: "회로의 병렬 연결에서는 전류가 여러 경로로 나뉜다.", answer: true },
    { question: "안전 규정에 따라 전기 공사는 반드시 전문가가 해야 한다.", answer: true },
    { question: "전기 배선은 규격에 맞지 않으면 전기 사고의 원인이 된다.", answer: true },
    { question: "접지 저항이 낮을수록 접지의 효과가 좋다.", answer: true },
    { question: "변압기의 효율은 전력 손실이 없는 이상적인 상태를 가정한다.", answer: false },
    { question: "유도성 부하는 전류보다 전압이 먼저 흐른다.", answer: false },
    { question: "역률이 높은 경우 전력 효율이 높아진다.", answer: true },
    { question: "단상 교류 전압은 보통 220V를 사용한다.", answer: true },
    { question: "3상 교류는 전선이 3개 필요하다.", answer: true },
    { question: "교류 전압에서 위상 차는 주파수와 무관하다.", answer: false },
    { question: "정전기는 높은 습도에서 발생하기 쉽다.", answer: false },
    { question: "절연체는 저항이 매우 큰 물질이다.", answer: true },
    { question: "정류기는 직류를 교류로 변환한다.", answer: false },
    { question: "전력은 전압에 전류를 곱하여 계산한다.", answer: true },
    { question: "동기 전동기는 속도가 일정하게 유지된다.", answer: true },
    { question: "접지선을 연결할 때는 항상 보호 장비를 착용해야 한다.", answer: true },
    { question: "병렬 회로에서 부하 하나가 고장 나면 모든 부하가 정지한다.", answer: false },
    { question: "배선의 저항이 작으면 전력 손실이 적다.", answer: true },
    { question: "전기 감전은 교류보다 직류에서 더 위험하다.", answer: false },
    { question: "안전 차단기는 누전을 감지하여 회로를 차단한다.", answer: true },
    { question: "3상 회로에서는 위상 차이가 90도이다.", answer: false },
    { question: "초고압 송전선은 공중에 설치하여 절연을 강화한다.", answer: true },
    { question: "접지선의 두께는 상전선과 동일해야 한다.", answer: false },
    { question: "변압기 절연유는 내부 전선을 보호하는 역할을 한다.", answer: true },
    { question: "고주파 신호는 주파수가 높아질수록 멀리 전달된다.", answer: false },
    { question: "도체는 열을 방출하여 전류를 생성한다.", answer: false },
    { question: "전류의 크기는 전압에 비례하고 저항에 반비례한다.", answer: true },
    { question: "회로의 용량 초과는 장비 손상 원인이 될 수 있다.", answer: true },
    { question: "접지 공사는 고압 설비에서만 필요하다.", answer: false },
    { question: "회로에 전원이 공급되지 않으면 전류가 흐르지 않는다.", answer: true },
    { question: "교류에서 리액턴스는 주파수에 따라 변한다.", answer: true },
    { question: "전선의 피복은 절연체로 제작된다.", answer: true },
    { question: "병렬 회로에서는 저항이 클수록 전류가 많이 흐른다.", answer: false },
    { question: "전기 배선은 항상 절연처리 되어야 한다.", answer: true },
    { question: "자동차 배터리는 보통 12V 직류를 공급한다.", answer: true },
    { question: "초고압 송전에서는 전류를 줄여 전력 손실을 최소화한다.", answer: true },
    { question: "차단기는 과전류와 과전압을 동시에 방지한다.", answer: false },
    { question: "자기장은 전류가 흐를 때만 발생한다.", answer: true },
    { question: "콘덴서는 직류 전류가 통과할 수 있다.", answer: false },
    { question: "도체는 자유 전자를 포함하고 있다.", answer: true },
    { question: "접지 저항이 높을수록 접지의 성능이 좋다.", answer: false },
    { question: "전원 스위치가 꺼져도 남아있는 전기 위험이 있을 수 있다.", answer: true },
    { question: "피뢰기는 낙뢰로 인한 전기적 손상을 방지한다.", answer: true },
    { question: "전기 기기는 설치 후에도 정기적인 점검이 필요 없다.", answer: false },
    { question: "회로의 절연 저항이 높을수록 안전하다.", answer: true },
    { question: "고주파 신호는 리액턴스를 감소시킨다.", answer: false },
    { question: "병렬 회로에서 전압은 동일하게 유지된다.", answer: true },
    { question: "정전기 유도는 물체 사이의 전위 차에 의해 발생한다.", answer: true },
    { question: "단락 회로는 전기 기기의 보호 장치이다.", answer: false },
    { question: "모든 전기 기기는 접지가 필요하다.", answer: false },
    { question: "접지선의 길이가 길면 저항이 증가할 수 있다.", answer: true },
    { question: "누전 차단기는 고전압을 감지하여 회로를 차단한다.", answer: false },
    { question: "전기배선에서 스위치 배치는 규정에 맞아야 한다.", answer: true },
    { question: "리액턴스는 전류의 변화를 방해한다.", answer: true },
    { question: "전압 강하가 크면 전기 기기 효율이 낮아진다.", answer: true },
    { question: "병렬 회로에서 각 저항에 흐르는 전류는 동일하다.", answer: false },
    { question: "교류 전력의 단위는 W(와트)이다.", answer: true },
    { question: "절연체가 손상되면 전기 충격 위험이 증가한다.", answer: true },
    { question: "변압기의 코일 간 거리가 좁을수록 전류가 많이 흐른다.", answer: false },
    { question: "회로 보호를 위해 차단기는 필수적이다.", answer: true },
    { question: "병렬 회로에서 전압은 모든 부하에 동일하게 걸린다.", answer: true },
    { question: "저항의 단위는 패러데이(F)이다.", answer: false },
    { question: "교류에서 유도 리액턴스는 주파수가 증가하면 증가한다.", answer: true },
    { question: "건전지는 교류 전원을 공급한다.", answer: false },
    { question: "변압기는 교류 전압을 증가 또는 감소시킨다.", answer: true },
    { question: "전류가 흐를 때 발생하는 자기장을 전자기장이라고 한다.", answer: true },
    { question: "접지선은 주로 초록색 또는 노란색으로 표시된다.", answer: true },
    { question: "전선의 단면적이 크면 저항도 커진다.", answer: false },
    { question: "자동차 전원은 직류(DC)를 사용한다.", answer: true },
    { question: "LED는 저항 없이 직접 교류에 연결할 수 있다.", answer: false },
    { question: "고압 전력선을 지지하는 장치는 철탑이다.", answer: true },
    { question: "접지는 전기 회로의 안전성을 높이기 위해 사용된다.", answer: true },
    { question: "콘덴서는 전기 에너지를 저장하는 장치이다.", answer: true },
    { question: "퓨즈는 전선의 온도를 낮추는 역할을 한다.", answer: false },
    { question: "차단기는 회로를 과전류로부터 보호하는 장치이다.", answer: true },
    { question: "전류가 일정한 방향으로 흐르면 이를 직류라고 한다.", answer: true },
    { question: "전선의 길이가 길면 저항이 감소한다.", answer: false },
    { question: "자기 유도 현상은 코일에 전류가 흐를 때 발생한다.", answer: true },
    { question: "비접지 상태에서 전기 기기는 누전될 가능성이 낮다.", answer: false },
    { question: "전압 강하는 전선 저항과 전류에 비례한다.", answer: true },
    { question: "병렬 연결된 저항의 전체 저항값은 각각의 저항값보다 작다.", answer: true },
    { question: "역률이 높을수록 전력 소비 효율이 좋다.", answer: true },
    { question: "절연체는 전기 전도도가 높은 물질이다.", answer: false },
    { question: "전기 회로에서의 전류는 항상 저항이 없는 경로를 선택한다.", answer: true },
    { question: "정전기는 물체 사이의 전위차로 인해 발생할 수 있다.", answer: true },
    { question: "동기 발전기는 주파수를 일정하게 유지한다.", answer: true },
    { question: "회로 차단기는 과부하 보호 기능을 수행한다.", answer: true },
    { question: "도체는 전하의 이동을 쉽게 허용한다.", answer: true },
    { question: "콘덴서는 전류의 흐름을 완전히 차단한다.", answer: false },
    { question: "교류 전원에서 위상 차는 주기적으로 변하지 않는다.", answer: true },
    { question: "전원 주파수는 Hz(헤르츠) 단위로 측정된다.", answer: true },
    { question: "전선 피복은 전기적으로 절연성을 제공한다.", answer: true },
    { question: "정류기는 교류를 직류로 변환하는 장치이다.", answer: true },
    { question: "교류 전동기는 교류 전원에서 작동한다.", answer: true },
    { question: "배터리의 단위는 Ah(암페어시)로 표시된다.", answer: true },
    { question: "리액턴스가 높을수록 전류가 쉽게 흐른다.", answer: false },
    { question: "전기 쇼크는 주로 전류에 의해 발생한다.", answer: true },
    { question: "직류와 교류는 동일한 방식으로 전도된다.", answer: false },
    { question: "전자기유도는 전자기파와 관련이 있다.", answer: false },
    { question: "동기 전동기는 주파수가 일정한 교류 전원에서 동작한다.", answer: true },
    { question: "초고압 송전은 전력 손실을 줄이기 위해 사용된다.", answer: true },
    { question: "피뢰기는 변압기를 과전류로부터 보호한다.", answer: false },
    { question: "접지는 전기 회로의 전기적 안전을 위해 필수적이다.", answer: true },
    { question: "단상 전원은 주로 상업용 건물에서 사용된다.", answer: false },
    { question: "변압기의 1차와 2차는 전기적으로 연결되어 있다.", answer: false },
    { question: "병렬 회로의 총 전류는 각 분기 전류의 합과 같다.", answer: true },
    { question: "퓨즈가 끊어지면 회로가 차단된다.", answer: true },
    { question: "고온은 전기 기기의 절연 저항을 감소시킨다.", answer: true },
    { question: "배터리의 내부 저항이 크면 전압이 낮아진다.", answer: true },
    { question: "리액턴스는 저항과 동일한 기능을 한다.", answer: false },
    { question: "전기 기기 설치 시 접지는 필수이다.", answer: true },
    { question: "정류기는 직류를 교류로 변환한다.", answer: false },
    { question: "병렬 회로의 각 부하에 흐르는 전류는 다를 수 있다.", answer: true },
    { question: "직렬 연결된 저항은 총 저항을 증가시킨다.", answer: true },
    { question: "초음파는 전자기파의 일종이다.", answer: false },
    { question: "전력은 전압과 전류의 곱으로 구할 수 있다.", answer: true },
    { question: "전류가 흐를 때 전자기파가 발생한다.", answer: true },
    { question: "병렬 회로의 각 저항에 걸리는 전압은 동일하다.", answer: true },
    { question: "변압기에서 에너지 손실은 주로 열로 발생한다.", answer: true },
    { question: "직류 전류는 항상 일정한 방향으로 흐른다.", answer: true },
    { question: "접지선의 저항이 높을수록 안전성이 높아진다.", answer: false },
    { question: "교류는 일정한 주파수로 위상이 변하지 않는다.", answer: false },
    { question: "전류는 전하의 이동 속도를 나타낸다.", answer: true },
    { question: "자동차 배터리는 교류 전원을 제공한다.", answer: false },
    { question: "전기 회로에서 전압 강하는 필수적이다.", answer: false },
    { question: "교류 전류는 주파수에 따라 방향이 주기적으로 바뀐다.", answer: true },
    { question: "정전기는 도체보다는 절연체에서 더 쉽게 발생한다.", answer: true },
    { question: "교류 회로에서는 위상이 일정하게 유지된다.", answer: false },
    { question: "접지는 전류가 대지로 흐르게 한다.", answer: true },
    { question: "전력 소모는 전압과 전류의 곱과 무관하다.", answer: false },
    { question: "전선은 단면적이 클수록 전류가 더 잘 흐른다.", answer: true },
    { question: "전기 쇼크의 위험성은 전류보다 전압에 크게 좌우된다.", answer: false },
    { question: "병렬 연결된 저항에서 전류는 저항이 큰 쪽으로 더 많이 흐른다.", answer: false },
    { question: "배터리 용량은 mAh 단위로 표시되기도 한다.", answer: true },
    { question: "유도 전동기는 속도 제어가 쉽다.", answer: false },
    { question: "전선 피복은 전기 안전을 위한 절연층이다.", answer: true },
    { question: "교류 전원에서는 위상 변화가 발생한다.", answer: true },
    { question: "자동차의 점화 플러그는 직류 전원을 사용한다.", answer: false },
    { question: "콘덴서는 직류 전압에서 전류가 흐르지 않는다.", answer: true },
    { question: "도체의 저항이 작으면 열 발생이 많다.", answer: false },
    { question: "병렬 회로는 전압이 일정하게 유지된다.", answer: true },
    { question: "직류는 항상 같은 방향으로 흐르는 전류를 말한다.", answer: true },
    { question: "교류 전동기는 속도 제어가 용이하다.", answer: false },
    { question: "변압기의 철심은 자기 유도를 위해 사용된다.", answer: true },
    { question: "단상 교류는 주로 가정용 전원으로 사용된다.", answer: true },
    { question: "접지 저항이 높으면 접지 효과가 좋다.", answer: false },
    { question: "병렬 회로의 각 부하는 동일한 전압을 갖는다.", answer: true },
    { question: "전기저항의 단위는 옴(Ω)이다.", answer: true },
    { question: "고압 송전선은 일반적으로 절연 처리가 필요 없다.", answer: false },
    { question: "전력은 전압에 전류를 곱한 값이다.", answer: true },
    { question: "정전기는 물체 간 전위 차로 인해 발생한다.", answer: true },
    { question: "단락은 전류가 흐를 수 없는 상태를 의미한다.", answer: false },
    { question: "교류 회로에서 전압과 전류의 위상차가 생길 수 있다.", answer: true },
    { question: "자기장은 전류가 흐르는 모든 도체 주변에서 발생한다.", answer: true },
    { question: "퓨즈는 과전류로부터 회로를 보호하는 역할을 한다.", answer: true },
    { question: "리액턴스는 전기저항의 일종이다.", answer: true },
    { question: "단상 교류의 주파수는 보통 60Hz이다.", answer: true },
    { question: "정류기는 교류를 직류로 변환하는 장치이다.", answer: true },
    { question: "접지 저항이 낮을수록 안전한 접지를 제공한다.", answer: true },
    { question: "전선의 길이가 길면 저항이 증가한다.", answer: true },
    { question: "저항값이 클수록 전류가 더 많이 흐른다.", answer: false },
    { question: "접지선은 보통 빨간색으로 표시된다.", answer: false },
    { question: "교류 전압은 시간에 따라 방향과 크기가 변화한다.", answer: true },
    { question: "병렬 회로에서는 하나의 부하가 고장 나도 다른 부하는 영향을 받지 않는다.", answer: true },
    { question: "정전기 방지는 주로 절연체로 이루어진다.", answer: true },
    { question: "변압기는 전류를 조절하는 장치이다.", answer: false },
    { question: "저항이 0인 도체를 초전도체라 부른다.", answer: true },
    { question: "리액턴스는 주파수에 영향을 받지 않는다.", answer: false },
    { question: "고압 전선은 일반적으로 외부 절연체로 보호된다.", answer: true },
    { question: "전선의 단면적이 클수록 저항이 증가한다.", answer: false },
    { question: "전원 주파수는 보통 50Hz 또는 60Hz이다.", answer: true },
    { question: "정전 유도 현상은 전류의 흐름에 의해 발생한다.", answer: false },
    { question: "교류 전압은 직류 전압보다 주로 높은 값을 갖는다.", answer: false },
    { question: "LED는 낮은 전압에서 작동하는 고효율 조명이다.", answer: true },
    { question: "배선용 차단기는 누전과 과전류로부터 보호한다.", answer: true },
    { question: "정전기는 공기 중에 습도가 높을 때 발생하기 쉽다.", answer: false },
    { question: "직류 회로에서는 위상 개념이 필요 없다.", answer: true },
    { question: "유도성 부하는 전류보다 전압이 먼저 흐른다.", answer: false },
    { question: "접지는 전기 설비의 안전을 강화하는 방법 중 하나이다.", answer: true },
    { question: "변압기는 주로 전류를 증폭하는 데 사용된다.", answer: false },
    { question: "유도 전동기는 자기 유도 원리를 이용한다.", answer: true },
    { question: "고압 전기에서는 접지가 불필요하다.", answer: false },
    { question: "동기 발전기는 일정한 주파수를 유지하는 것이 특징이다.", answer: true },
    { question: "자동차 배터리는 직류 전원을 제공한다.", answer: true },
    { question: "리액턴스는 전류의 흐름을 방해하는 성질을 의미한다.", answer: true },
    { question: "교류에서 전류는 일정한 방향으로만 흐른다.", answer: false },
    { question: "전기 감전은 전압의 높이에 따라 위험도가 결정된다.", answer: false },
    { question: "병렬 회로의 총 전류는 각 부하에 흐르는 전류의 합과 같다.", answer: true },
    { question: "접지선은 보통 회로의 중성점에 연결된다.", answer: true },
    { question: "정전기는 도체에서 더 잘 발생한다.", answer: false },
    { question: "접지 저항이 높으면 안전성이 증가한다.", answer: false },
    { question: "전력량은 kWh로 표시된다.", answer: true },
    { question: "전선은 전류가 잘 흐르도록 하기 위해 저항이 커야 한다.", answer: false },
    { question: "배선은 반드시 절연처리 되어야 한다.", answer: true },
    { question: "교류 주파수가 낮으면 리액턴스는 증가한다.", answer: false },
    { question: "전기 회로는 전원, 부하, 전도체로 구성된다.", answer: true },
    { question: "병렬 회로에서는 전류가 경로별로 나뉜다.", answer: true },
    { question: "전류는 전자 이동에 의해 발생한다.", answer: true },
    { question: "병렬 회로의 각 부하에는 동일한 전류가 흐른다.", answer: false },
    { question: "단상 전원은 전선 1가닥만으로 공급된다.", answer: false },
    { question: "LED는 전기에너지를 빛으로 변환하는 반도체 소자이다.", answer: true },
    { question: "전압 강하는 전류와 전선 저항에 비례한다.", answer: true },
    { question: "고압 송전에서는 전류를 낮추어 전력 손실을 줄인다.", answer: true },
    { question: "회로 차단기는 부하를 보호하기 위한 장치이다.", answer: true },
    { question: "전력은 단위 시간당 소비된 에너지를 의미한다.", answer: true },
    { question: "접지는 누전을 방지하는 역할을 한다.", answer: true },
    { question: "자동차 배터리는 교류 전류를 공급한다.", answer: false },
    { question: "배터리의 용량은 보통 Wh 단위로 표시된다.", answer: true },
    { question: "접지는 전기 안전을 위해 설치된다.", answer: true },
    { question: "정류기는 직류를 교류로 변환하는 장치이다.", answer: false },
    { question: "리액턴스는 전압과 전류의 위상차를 유발한다.", answer: true },
    { question: "직류 전압은 항상 일정한 크기를 유지한다.", answer: true },
    { question: "변압기는 교류만 변환할 수 있다.", answer: true },
    { question: "콘덴서는 직류 전류가 흐를 수 없다.", answer: true },
    { question: "교류 주파수가 높아지면 리액턴스는 감소한다.", answer: false },
    { question: "병렬 회로는 전압이 일정하게 유지된다.", answer: true },
    { question: "단락 회로는 전류가 흐르지 않는 상태를 의미한다.", answer: false },
    { question: "유도 전동기는 속도 조절이 어렵다.", answer: true },
    { question: "접지선은 전기 기기의 외부 금속 부분과 연결된다.", answer: true },
    { question: "병렬 회로의 저항이 높을수록 전류가 많이 흐른다.", answer: false },
    { question: "도체는 전자 이동을 허용하여 전류가 흐른다.", answer: true },
    { question: "정전기는 건조한 환경에서 잘 발생한다.", answer: true },
    { question: "전기 배선은 항상 절연 처리되어야 한다.", answer: true },
    { question: "단상 전원은 일반적으로 가정용 전원으로 사용된다.", answer: true },
    { question: "전류는 전압에 비례하고 저항에 반비례한다.", answer: true },
    { question: "병렬 회로에서는 한 부하가 고장 나도 다른 부하에는 영향을 미치지 않는다.", answer: true },
    { question: "배터리는 직류 전원을 공급한다.", answer: true },
    { question: "변압기는 직류 전압을 변환할 수 있다.", answer: false },
    { question: "교류 회로에서는 리액턴스와 저항이 서로 다르다.", answer: true },
    { question: "전류의 단위는 암페어(A)이다.", answer: true },
    { question: "절연체는 전기가 잘 흐르는 물질이다.", answer: false },
    { question: "전기 회로에서 전류는 전위차가 있을 때만 흐른다.", answer: true },
    { question: "퓨즈는 과전류가 흐를 때 회로를 보호하기 위해 사용된다.", answer: true },
    { question: "교류 전원에서 전류는 항상 같은 방향으로 흐른다.", answer: false },
    { question: "직렬 연결된 저항들의 총 저항은 각 저항값의 합과 같다.", answer: true },
    { question: "접지는 전기 충격을 방지하기 위해 사용된다.", answer: true },
    { question: "리액턴스는 주로 교류 회로에서 발생한다.", answer: true },
    { question: "변압기는 주파수를 변환할 수 있다.", answer: false },
    { question: "병렬 연결된 저항의 전체 저항값은 각각의 저항값보다 작다.", answer: true },
    { question: "접지선은 회로의 중성점에 연결된다.", answer: true },
    { question: "전압은 전위차라고도 불린다.", answer: true },
    { question: "교류는 주파수에 따라 방향이 바뀐다.", answer: true },
    { question: "전기는 항상 고체에서만 흐를 수 있다.", answer: false },
    { question: "저항이 크면 전류의 흐름이 더 쉽게 일어난다.", answer: false },
    { question: "배터리는 화학 에너지를 전기 에너지로 변환한다.", answer: true },
    { question: "전기 회로에서 저항을 줄이면 전류가 증가한다.", answer: true },
    { question: "차단기는 과전류와 누전으로부터 회로를 보호한다.", answer: true },
    { question: "정전기는 공기 중 습도가 높을 때 잘 발생한다.", answer: false },
    { question: "교류 전류는 일정한 주파수를 갖는다.", answer: true },
    { question: "접지 저항이 높으면 접지 효과가 향상된다.", answer: false },
    { question: "배선용 차단기는 화재를 방지하기 위해 사용된다.", answer: true },
    { question: "직류 전원은 주로 일정한 전압을 공급한다.", answer: true },
    { question: "절연체의 저항은 도체의 저항보다 높다.", answer: true },
    { question: "정전기는 두 물체가 서로 마찰할 때 발생할 수 있다.", answer: true },
    { question: "전력량은 킬로와트시(kWh)로 측정된다.", answer: true },
    { question: "병렬 회로에서는 전체 전압이 각 부하에 동일하게 걸린다.", answer: true },
    { question: "교류 전류의 방향은 일정하게 유지된다.", answer: false },
    { question: "전선은 전류가 흐르기 위해 필요한 저항을 제공한다.", answer: false },
    { question: "접지 저항은 가능한 낮게 유지해야 안전하다.", answer: true },
    { question: "변압기의 효율은 에너지 손실이 없을 때 최대가 된다.", answer: true },
    { question: "정전기는 공기 중에 습도가 낮을 때 더 잘 발생한다.", answer: true },
    { question: "교류 주파수는 일반적으로 50Hz 또는 60Hz이다.", answer: true },
    { question: "리액턴스는 직류 회로에서 발생한다.", answer: false },
    { question: "직렬 회로에서 전류는 모든 부하에 동일하게 흐른다.", answer: true },
    { question: "병렬 회로의 총 전류는 각 분기 전류의 합과 같다.", answer: true },
    { question: "교류 전동기는 전류 주파수와 관계없이 일정한 속도로 회전한다.", answer: false },
    { question: "접지는 전기 충격의 위험을 줄이기 위해 사용된다.", answer: true },
    { question: "정류기는 교류를 직류로 변환하는 장치이다.", answer: true },
    { question: "전력은 전압과 전류의 곱으로 계산된다.", answer: true },
    { question: "고압 송전선에는 항상 절연 처리가 필요하다.", answer: true },
    { question: "전류는 항상 저항이 작은 경로를 따라 흐른다.", answer: true },
    { question: "도체의 저항이 크면 전류가 더 쉽게 흐른다.", answer: false },
    { question: "병렬 회로에서는 한 부하의 저항이 바뀌어도 다른 부하에 영향을 미치지 않는다.", answer: true },
    { question: "교류 전압의 크기는 시간에 따라 변하지 않는다.", answer: false },
    { question: "LED는 낮은 전압에서 작동하는 고효율 조명 소자이다.", answer: true },
    { question: "접지선의 저항이 높으면 안전성이 낮아진다.", answer: true },
    { question: "변압기는 교류를 직류로 변환하는 기능이 있다.", answer: false },
    { question: "전선의 단면적이 커지면 저항이 증가한다.", answer: false },
    { question: "병렬 회로에서 각 부하에 흐르는 전류는 서로 다를 수 있다.", answer: true },
    { question: "고온 환경은 전기 기기의 절연 저항을 감소시킬 수 있다.", answer: true },
    { question: "유도 전동기는 주파수 변화에 따라 속도가 변한다.", answer: true },
    { question: "직류 전원은 주파수가 필요하지 않다.", answer: true },
    { question: "전류는 전하가 이동하는 속도를 나타낸다.", answer: true },
    { question: "교류 전원은 항상 일정한 방향으로 전류를 공급한다.", answer: false },
    { question: "저항이 큰 도체에서는 열 발생이 많아진다.", answer: true },
    { question: "단상 전원은 상업용 건물에 주로 사용된다.", answer: false },
    { question: "콘덴서는 교류 전류에서 전압을 지연시키는 효과가 있다.", answer: true },
    { question: "전선의 절연 피복은 전기 안전을 위한 필수 요소이다.", answer: true },
    { question: "정전 유도 현상은 두 물체 간 전위 차에 의해 발생한다.", answer: true },
    { question: "LED는 교류 전원에서 직접 사용할 수 있다.", answer: false },
    { question: "전기 배선의 절연 처리는 감전 사고를 방지한다.", answer: true },
    { question: "병렬 회로에서 각 부하에 걸리는 전압은 동일하다.", answer: true },
    { question: "변압기의 손실은 주로 열로 발생한다.", answer: true },
    { question: "전류가 클수록 자속이 감소한다.", answer: false },
    { question: "접지는 전기 설비의 안전성을 높이기 위해 필수적이다.", answer: true },
    { question: "전선의 단면적이 크면 전류가 쉽게 흐른다.", answer: true },
    { question: "배터리의 용량은 Ah로 표시되기도 한다.", answer: true },
    { question: "접지는 주로 금속과 연결되어 있다.", answer: true },
    { question: "병렬 연결된 저항은 총 저항을 감소시킨다.", answer: true },
    { question: "전기 회로에서 전류는 항상 일정한 경로를 따른다.", answer: true },
    { question: "전력량은 시간당 소비되는 전력의 총합을 의미한다.", answer: true },
     { question: "전류는 전자의 이동에 의해 발생한다.", answer: true },
    { question: "변압기는 전압을 변환하기 위한 장치이다.", answer: true },
    { question: "접지 저항은 높은 것이 바람직하다.", answer: false },
    { question: "직류 전류는 항상 일정한 방향으로 흐른다.", answer: true },
    { question: "교류 회로에서 리액턴스는 주파수에 영향을 받는다.", answer: true },
    { question: "유도 전동기는 회전자에 자기장을 형성하여 동작한다.", answer: true },
    { question: "퓨즈는 회로에서 과전류를 차단하기 위한 장치이다.", answer: true },
    { question: "LED는 낮은 전압에서 작동하며, 빛을 방출하는 다이오드이다.", answer: true },
    { question: "전기저항의 단위는 볼트(V)이다.", answer: false },
    { question: "접지선은 전기 기기의 금속 외장에 연결된다.", answer: true },
    { question: "변압기는 직류 전원을 변환할 수 있다.", answer: false },
    { question: "절연체는 전기를 잘 전달하는 물질이다.", answer: false },
    { question: "병렬 회로에서 각 부하에 걸리는 전압은 동일하다.", answer: true },
    { question: "배터리는 주로 교류 전원을 공급한다.", answer: false },
    { question: "교류 전압은 일정한 주파수로 변동한다.", answer: true },
    { question: "정류기는 교류를 직류로 변환하는 장치이다.", answer: true },
    { question: "저항이 클수록 전류가 더 많이 흐른다.", answer: false },
    { question: "교류 전원은 시간에 따라 전류의 방향이 바뀐다.", answer: true },
    { question: "도체는 전류가 흐르기 어려운 재료이다.", answer: false },
    { question: "교류 주파수가 높아지면 리액턴스가 감소한다.", answer: false },
    { question: "접지는 전기적 충격을 방지하는 역할을 한다.", answer: true },
    { question: "정전기는 공기 중 습도가 높을 때 잘 발생한다.", answer: false },
    { question: "전기 회로에서 전류는 전위 차가 있을 때만 흐른다.", answer: true },
    { question: "변압기는 교류 전압만 변환할 수 있다.", answer: true },
    { question: "병렬 회로에서 전류는 각 부하로 나뉘어 흐른다.", answer: true },
    { question: "전력의 단위는 와트(W)이다.", answer: true },
    { question: "리액턴스는 교류 회로에서만 발생한다.", answer: true },
    { question: "직렬 회로에서 전류는 모든 부하에 동일하게 흐른다.", answer: true },
    { question: "접지 저항이 낮을수록 안전성이 높아진다.", answer: true },
    { question: "고압 송전선은 절연 처리가 필요 없다.", answer: false },
    { question: "전압 강하는 전류가 흐르면서 전압이 감소하는 현상이다.", answer: true },
    { question: "콘덴서는 직류 전류를 차단하는 특성이 있다.", answer: true },
    { question: "배선용 차단기는 과전류와 누전으로부터 회로를 보호한다.", answer: true },
    { question: "전류는 항상 저항이 큰 경로를 따라 흐른다.", answer: false },
    { question: "변압기는 직류 전류를 변환할 수 있다.", answer: false },
    { question: "전류는 전자의 흐름에 의해 발생한다.", answer: true },
    { question: "접지 저항은 가능한 낮아야 한다.", answer: true },
    { question: "교류는 일정한 방향으로만 흐른다.", answer: false },
    { question: "전선의 단면적이 작을수록 저항이 감소한다.", answer: false },
    { question: "교류 주파수는 Hz 단위로 측정된다.", answer: true },
    { question: "교류 전류는 항상 일정한 크기를 유지한다.", answer: false },
    { question: "고압 전기는 감전을 방지하기 위해 접지가 필요 없다.", answer: false },
    { question: "병렬 회로에서는 하나의 부하가 고장 나도 다른 부하에 영향을 미치지 않는다.", answer: true },
    { question: "리액턴스는 교류에서 전류의 흐름을 방해하는 성질을 말한다.", answer: true },
    { question: "직류 전원은 일정한 주파수를 가진다.", answer: false },
    { question: "변압기는 전류와 전압을 변환한다.", answer: false },
    { question: "배터리의 용량은 암페어시(Ah) 단위로 측정된다.", answer: true },
    { question: "전기 회로의 절연은 전기적 안전을 위해 필요하다.", answer: true },
    { question: "직렬 회로의 총 저항은 각 저항의 합이다.", answer: true },
    { question: "교류 전류의 방향은 항상 일정하다.", answer: false },
    { question: "병렬 회로의 총 저항은 각 저항의 역수 합으로 계산된다.", answer: true },
    { question: "전력량은 시간당 소비된 전력을 의미하며, kWh 단위로 측정된다.", answer: true },
    { question: "정류기는 직류를 교류로 변환한다.", answer: false },
    { question: "콘덴서는 전하를 저장하는 특성을 가진다.", answer: true },
    { question: "병렬 연결된 회로에서는 각 부하에 동일한 전류가 흐른다.", answer: false },
    { question: "고압 전력 시스템에서는 전압 강하를 줄이기 위해 전류를 낮춘다.", answer: true },
    { question: "변압기는 교류 전압의 크기만을 변환한다.", answer: true },
    { question: "정전기는 전기적 충격을 일으킬 수 있다.", answer: true },
    { question: "교류 회로에서 전류와 전압은 항상 동일한 위상을 가진다.", answer: false },
    { question: "접지선은 회로의 중성점과 연결된다.", answer: true },
    { question: "배터리는 화학 에너지를 전기 에너지로 변환한다.", answer: true },
    { question: "리액턴스는 전류의 흐름을 방해하는 저항 성분이다.", answer: true },
    { question: "전기 회로에서 전류는 저항이 높은 경로를 따라 흐른다.", answer: false },
    { question: "교류 전류는 전류의 방향이 주기적으로 변동한다.", answer: true },
    { question: "접지 저항이 낮을수록 감전 위험이 감소한다.", answer: true },
    { question: "직류 전류는 시간이 지나면서 방향이 바뀐다.", answer: false },
    { question: "전선의 단면적이 커지면 저항이 줄어든다.", answer: true },
    { question: "교류 전원은 주기적으로 방향이 바뀌는 전압을 제공한다.", answer: true },
    { question: "변압기는 주로 교류 전압을 높이거나 낮추기 위해 사용된다.", answer: true },
    { question: "전압 강하는 전류가 흐르면서 전기적 위치에 따라 발생하는 손실이다.", answer: true },
    { question: "교류 전압의 크기는 항상 일정하다.", answer: false },
    { question: "전기 회로에서 전압과 전류가 비례한다는 것은 옴의 법칙이다.", answer: true },
    { question: "전력은 전압과 전류를 곱한 값으로 표현된다.", answer: true },
    { question: "접지 저항이 높을수록 전기 설비의 안전성이 높아진다.", answer: false },
    { question: "교류 회로에서 전류와 전압은 같은 위상을 유지한다.", answer: false },
    { question: "배터리의 출력 전류는 주로 직류 전류이다.", answer: true },
    { question: "전기 회로에서 퓨즈는 과전류를 방지하는 역할을 한다.", answer: true },
    { question: "접지는 전기 충격으로부터 보호하는 역할을 한다.", answer: true },
    { question: "정전기는 전자 이동에 의해 발생하는 에너지이다.", answer: true },
    { question: "직류 전류는 교류 전류보다 항상 안전하다.", answer: false },
    { question: "배터리는 교류 전력을 저장할 수 있다.", answer: false },
    { question: "교류 전류는 리액턴스가 높은 경로를 따라 흐른다.", answer: false },
    { question: "변압기의 코어는 주로 강철로 만들어진다.", answer: true },
    { question: "교류 전원은 일정한 주파수를 가지고 작동한다.", answer: true },
    { question: "도체의 온도가 높아지면 저항도 높아질 수 있다.", answer: true },
    { question: "저항값이 낮을수록 회로의 전류가 높아진다.", answer: true },
    { question: "전기 회로에서 단락은 회로가 열려 있음을 의미한다.", answer: false },
    { question: "교류 전류의 주파수가 높을수록 변압기 손실이 증가한다.", answer: true },
    { question: "전류는 전하의 이동 속도로 측정된다.", answer: true },
    { question: "리액턴스가 크면 교류 전류 흐름이 방해된다.", answer: true },
    // 추가 질문을 여기에 추가
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question');
const resultContainer = document.getElementById('result');
const scoreContainer = document.getElementById('score');
const trueButton = document.getElementById('true-button');
const falseButton = document.getElementById('false-button');
const nextButton = document.getElementById('next-question-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    resultContainer.textContent = "";
    nextButton.classList.add('hidden');
}

function checkAnswer(isTrue) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answer === isTrue) {
        resultContainer.textContent = "정답입니다!";
        score++;
    } else {
        resultContainer.textContent = "오답입니다.";
    }
    scoreContainer.textContent = `점수: ${score} / ${questions.length}`;
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        resultContainer.textContent = "퀴즈가 끝났습니다!";
        questionContainer.textContent = "";
        trueButton.disabled = true;
        falseButton.disabled = true;
    }
}

trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));
nextButton.addEventListener('click', nextQuestion);

loadQuestion();
