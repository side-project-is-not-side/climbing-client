# Grabbers

## Folder Structure

- 폴더 구조는 [Features-Sliced Design](https://feature-sliced.design/) 구조를 따르며 이 구조는 다음과 같은 특징을 갖습니다.

1. 상위 Layer에서는 하위 Layer에 위치한 파일을 import 해서 사용할 수 있지만, 하위 Layer에서는 상위 Layer에 있는 파일을 import해서 사용할 수 없습니다.

2. Layers - Slices - Segments 구조로 뎁스는 최대 3단계로 제한합니다.

<br/>

### App

- 전체적인 설정을 담당하는 파일이 위치합니다.

- 예를들어 전역적으로 감싸주는 역할을 하는 Provider가 위치합니다.

```shell
📦App
 ┗ 📜SWRConfigContext.tsx
```

### Pages

- 주소별 페이지가 위치하는 폴더입니다.

  - App router를 사용하는 상황에서는

  - 단순히 widgets, features, entities에 있는 컴포넌트들을 모아서 export 하면 root app 폴더에서 import 해서 사용하는건지 ?

### Widgets

- 기존의 layout을 대체하는 역할을 하는 폴더입니다.

- layout의 역할을 하는 파일 뿐 아니라 여러개의 Features나 Entities들을 묶은 파일 또한 Widgets 폴더 내에 정의할 수 있습니다.

### Features

```shell
📦entities
 ┣ 📂userClick
 ┃ ┣ 📂api
 ┃ ┣ 📂model
 ┃ ┗ 📂ui
```

- F.S.D 구조에서 기존의 컴포넌트는 Features, Entities로 나눌 수 있습니다.

- Features는 "동사"로 표현할 수 있는, 어떠한 행동을 하는 컴포넌트가 위치합니다.

- 즉, 어떤 행위를 하는 로직이 추가된 컴포넌트가 Features 폴더 내에 위치합니다.

- Features의 Slice는 동사로 네이밍을 할 수 있으며, api segment에서는 특정 행동에 대한 요청하는 로직이 추가됩니다.

### Entities

```shell
# entities 폴더 내에 있는 Slice는 도메인 기준으로 나눈다.

📦entities
 ┣ 📂user
 ┃ ┣ 📂api
 ┃ ┣ 📂model # 데이터가 위치
 ┃ ┗ 📂ui
```

- Entities는 "명사"로 표현할 수 있는, 데이터를 보여주는 컴포넌트가 위치합니다.

- Entities의 Slice는 명사로 네이밍을 할 수 있으며, api segment에서는 특정 데이터를 조회하는 로직이 추가됩니다.

- 예를들어 단순히 유저의 정보를 보여주는 컴포넌트라면,

- Entities 폴더 안에 있는 user Slice에서 ui segment와 api segment를 조합해서 유저 정보를 보여줍니다.

- 하지만 여기에 유저의 액션이 추가된다면, Features 폴더에서 해당 컴포넌트를 불러와서 필요한 로직을 추가해줍니다.

### Shared

```shell
📦shared
 ┣ 📂hooks
 ┣ 📂types
 ┣ 📂ui
 ┣ 📂utils
```

- Shared는 공유될 수 있는 컴포넌트와 로직이 위치하는 폴더로 별도의 Slices를 갖지 않고 Segments만 갖습니다.

- 공용 컴포넌트는 Shared 폴더 내의 ui 폴더 안에 위치하며, 이 컴포넌트들은 비즈니스 로직을 갖지 않고 단순히 props로 받은 값들을 보여주는 역할만 합니다.
