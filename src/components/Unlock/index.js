import {useState} from 'react'

import {
  MainContainer,
  LockContainer,
  Image,
  ImageText,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)

  const onLockedUnlocked = () => setLock(prevState => !prevState)
  const ImageUrl = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLock ? 'lock' : 'unlock'

  return (
    <MainContainer>
      <LockContainer>
        <Image src={ImageUrl} alt={altText} />
        <ImageText>
          {isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </ImageText>
      </LockContainer>

      <Button type="button" onClick={onLockedUnlocked}>
        {isLock ? 'Unlock' : 'Lock'}
      </Button>
    </MainContainer>
  )
}

export default Unlock
