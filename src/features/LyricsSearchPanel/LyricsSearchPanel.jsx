/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import './lyrics-search-panel.css';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
function LyricsSearchPanel({ onSearch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    onSearch(data);
    reset();
  };

  return (
    <div className="container-form">
      <h2
        title="Header"
        style={{
          color: 'white',
        }}
      >
        Search your favorite song lyrics
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          className="search-input"
          {...register('lyrics', {
            required: 'Lyrics input is required',
            maxLength: 35,
            minLength: {
              value: 2,
              message: 'Type min one character',
            },
          })
          }
        />
        {errors?.lyrics && <h6>{errors?.lyrics.message || 'Error'}</h6>}
        <input
          className="search-input"
          {...register('artist', {
            maxLength: {
              value: 35,
              message: 'Artist is to long',
            },
          })
            }
        />
        {errors?.artist && <h6>{errors?.artist.message || 'Error'}</h6>}
        <button data-testid="submit-button" type="submit" className="btn btn-primary" disabled={!isValid}>Search lyrics</button>
      </form>
    </div>
  );
}

export default LyricsSearchPanel;
