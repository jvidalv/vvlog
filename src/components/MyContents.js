import React from 'react';
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaReddit,
  FaStackOverflow,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  IconA,
  ShareA,
  SharerStyled,
  SubscribeContainer,
} from './MyContentsStyle';
import { ButtonStyled, H3, InputStyled, Label } from '../styles/GenericStyles';
import useT from '../helpers/Translator';
import { useGlobals } from '../contexts/Global';
import { isEmail } from '../helpers/Validations';
import vfetch from '../helpers/Vfetch';
import vStorage from '../helpers/VStorage';
import api_calls from '../constants/Api';
import STORAGE_KEYS from '../constants/Storers';

/**
 * @param props
 * @returns {*}
 * @constructor
 */
export const Network = (props) => {
  const { url, title, icon } = props;
  return (
    <IconA href={url} title={title} target="_blank">
      {icon}
    </IconA>
  );
};

/**
 * Returns an inline element with all my social networks
 * Ready to use everywhere as it contains until the container component
 * @param props
 * @returns {*}
 * @constructor
 */
export function MyNetworks(props) {
  const { className } = props;
  return (
    <div className={'text-center ' + className}>
      <Network
        url="mailto:josepvidalvidal@gmail.com"
        title="Send me an email"
        icon={<FaEnvelopeOpen />}
      />
      <Network
        url="https://github.com/jvidalv"
        title="My GitHub!"
        icon={<FaGithub />}
      />
      <Network
        url="https://www.instagram.com/jvidalv/"
        title="Its my Insta"
        icon={<FaInstagram />}
      />
      <Network
        url="https://stackoverflow.com/users/9724551/josep-vidal?tab=profile"
        title="I also participate on SO!"
        icon={<FaStackOverflow />}
      />
      <Network
        url="https://www.linkedin.com/in/josepvidalvidal/"
        title="My profesional profesion pro profile"
        icon={<FaLinkedinIn />}
      />
      <Network
        url="https://josepvidal.dev"
        title="My personal page!"
        icon={<FaGlobe />}
      />
    </div>
  );
}

/**
 * @param props
 * @returns {*}
 * @constructor
 */
const ShareOption = (props) => {
  const { url, title, icon, iconColor, className } = props;
  return (
    <ShareA
      href={url}
      className={className}
      title={title}
      iconColor={iconColor}
      target="_blank"
    >
      {icon}
    </ShareA>
  );
};

/**
 * @param props
 * @returns {*}
 * @constructor
 */
export function Sharer(props) {
  const { title } = props;
  const location = window.location.href;
  return (
    <>
      <SharerStyled className={props.className}>
        <ShareOption
          url={'https://www.facebook.com/sharer/sharer.php?u=' + location}
          icon={<FaFacebook />}
          title="Share on Facebook! 💖"
          className="left-bar"
        />
        <ShareOption
          url={
            'https://www.reddit.com/submit?url=' + location + '&title=' + title
          }
          icon={<FaReddit />}
          title="Share on Reddit! 💖"
        />
        <ShareOption
          url={'https://web.whatsapp.com/send?text=' + location}
          icon={<FaWhatsapp />}
          title="Share on Whatsapp! 💖"
        />
        <ShareOption
          url={
            'https://twitter.com/intent/tweet?url=' +
            location +
            '&text=' +
            title +
            '&original_referer=' +
            location
          }
          icon={<FaTwitter />}
          title="Share on Twitter! 💖"
        />
        <ShareOption
          url={
            'https://www.linkedin.com/sharing/share-offsite/?url=' + location
          }
          icon={<FaLinkedinIn />}
          className="right-bar"
          title="Share on LinkedIn! 💖"
        />
      </SharerStyled>
    </>
  );
}

/**
 * @param props
 * @returns {*}
 * @constructor
 */
export function Subscribe(props) {
  const [{ language }] = useGlobals();
  // 0 => yet has to subscribe, 1 => email is invalid, 3 => ok
  const [subscribed, setSubscribed] = React.useState(0);
  const emailInput = React.useRef();
  /**
   * Validates email and fetches de data to the bd
   */
  const subscription = () => {
    const user_email = emailInput.current.value;
    if (isEmail(user_email)) {
      setSubscribed(3);
      const data = {
        email: user_email,
        language_id: language,
      };
      vfetch(api_calls.data.newsletter_subscriber, { ...data }).then(() =>
        vStorage.setItem(STORAGE_KEYS.NEWSLETTER_SUBSCRIBED, user_email)
      );
    } else {
      setSubscribed(1);
    }
  };

  return (
    <SubscribeContainer
      className={
        'position-relative ' + (subscribed === 3 ? 'disappearToRight' : '')
      }
    >
      <div>
        <H3>
          <span className="pr-2" role="img" aria-label="rocket">
            💌
          </span>
          {useT('subscribe_and_stay_in_touch')}
        </H3>
        <div>
          <InputStyled
            width="80%"
            ref={emailInput}
            disabled={subscribed === 3}
            type="email"
            className="text-center my-4"
            placeholder="your email"
            themeborder={subscribed === 1 ? 'error' : null}
          />
        </div>
        <ButtonStyled
          className={subscribed === 3 ? 'd-none' : ''}
          disabled={subscribed === 3}
          onClick={() => subscription()}
        >
          {useT('subscribe')}
        </ButtonStyled>
      </div>
      <div
        className={
          'position-absolute w-100 ' + (subscribed !== 3 ? 'd-none' : 'growBig')
        }
        style={{ top: '40%' }}
      >
        <div>👍</div>
        <Label themecolor="primary">{useT('thanks_for_subscribing')}!!</Label>
      </div>
    </SubscribeContainer>
  );
}
