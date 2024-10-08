import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { FaInstagram, FaTwitch } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function CardPlayer(props) {
  const player = props.data;

  const avaliarNacionalidade = (nacionalidade) => {
    if (nacionalidade === 'Brasileira') {
      return (
        <img
          src={'../images/Bandeiras/brazil-flag-icon.webp'}
          className="foto-nacionalidade-player"
          alt="bandeira-brasileira"
        />
      );
    }
    if (nacionalidade === 'Argentina') {
      return (
        <img
          src={'../images/Bandeiras/argentina-flag-icon.png'}
          className="foto-nacionalidade-player"
          alt="bandeira-argentina"
        />
      );
    }
    if (nacionalidade === 'Chilena') {
      return (
        <img
          src={'../images/Bandeiras/chile-flag-icon.png'}
          className="foto-nacionalidade-player"
          alt="bandeira-chilena"
        />
      );
    }
    return null;
  };

  const avaliarCapitao = (capitao) => {
    if (capitao === 'true') {
      return <p className="informacao-capitao">Capitão</p>;
    }
    return null;
  };

  return (
    <div className="container-card-player">
      <div className="card-player-imagem">
        <img src={player.imagem} className="foto-player" alt="" />
      </div>
      <div className="card-player-informacoes">
        <div className="informacoes-pessoais-players">
          <div className="header-informacoes">
            <p className="informacao-posicao">{player.posicao}</p>
            {avaliarCapitao(player.capitao)}
            {avaliarNacionalidade(player.nacionalidade)}
          </div>
          <div className="header-informacoes-pessoais">
            <h4>
              {player.nome.split(' ')[0]} &quot;{player.nickname}&quot;{' '}
              {player.nome.split(' ').slice(1).join(' ')}
            </h4>

            <p className="informacao-props-nascimento">{player.nascimento}</p>
          </div>
        </div>
        <div className="redes-sociais-players">
          <li>
            {player.twitch && (
              <a
                href={player.twitch}
                className="link-social-media"
                rel="noreferrer"
                target="_blank"
              >
                <FaTwitch size={20} />
              </a>
            )}
          </li>
          <li>
            {player.instagram && (
              <a
                href={player.instagram}
                className="link-social-media"
                rel="noreferrer"
                target="_blank"
              >
                <FaInstagram size={20} />
              </a>
            )}
          </li>
          <li>
            {player.x && (
              <a
                href={player.x}
                className="link-social-media"
                rel="noreferrer"
                target="_blank"
              >
                <FaSquareXTwitter size={20} />
              </a>
            )}
          </li>
        </div>
      </div>
    </div>
  );
}

export default CardPlayer;

CardPlayer.propTypes = {
  data: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    nacionalidade: PropTypes.string.isRequired,
    nascimento: PropTypes.string.isRequired,
    posicao: PropTypes.string.isRequired,
    capitao: PropTypes.bool.isRequired,
    instagram: PropTypes.string,
    x: PropTypes.string,
    twitch: PropTypes.string,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
};
