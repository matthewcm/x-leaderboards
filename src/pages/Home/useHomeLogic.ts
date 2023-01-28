
import { useState, useMemo } from 'react';
import { parseString } from 'whatsapp-chat-parser';
import { Message } from 'whatsapp-chat-parser/types/types';
import { Messages, Scores } from '../../interfaces/interfaces';

const showError = (message: string, err?: Error) => {
  console.error(err || message); // eslint-disable-line no-console
  alert(message); // eslint-disable-line no-alert
};

const replaceEncryptionMessageAuthor = (messages: Messages) =>
  messages.map((message, i) => {
    if (i < 10 && message.message.includes('end-to-end')) {
      return { ...message, author: 'System' };
    }
    return message;
  });

export const useHomeLogic = () => {
  const [messages, setMessages] = useState<Messages>([]);
  const [scores , setScores] = useState<Scores>([]);

  
  const xRecord = useMemo(
    () => (
      Array.from(new Set(messages.map(({ author }) => author)))
      .filter( author => author !== 'System')
      .reduce((ob, person) => ({...ob, [person]: 0 }), {})
    ), [messages]
  )

  const txtLoadEndHandler = (e: ProgressEvent<FileReader>) => {
    const result = e.target?.result;

    parseString(result as string)
      .then(replaceEncryptionMessageAuthor)
      .then(setMessages)
      .catch(err =>
        showError('An error has occurred while parsing the file', err),
      );
  };

  const processFile = (file: File) => {
    if (!file) return;

    const reader = new FileReader();

    if (file.type === 'text/plain') {
      reader.addEventListener('loadend', txtLoadEndHandler);
      reader.readAsText(file);
    } else {
      showError(`File type ${file.type} not supported`);
    }
  };

  useMemo(
    () => {

      if (!messages) return

      const xScores: Record<string, number> = xRecord

      const rankings: {
        name: string,
        score: number
      }[] = [];

      const xMessages = messages.filter(({ message }: Message) => {
        const withX = /(\n|^)x.*/i
        return message.match(withX)
      })

      xMessages.forEach(({ author }: Message) => {
        if (xScores[author] != undefined) {
        xScores[author] += 1;
        }
      })

      Object.keys(xScores).forEach((name: string) => {
        rankings.push({
          name,
          score: xScores[name]
        })
      })

      rankings.sort((a,b) =>  b.score - a.score);

      setScores(rankings);

    }, [messages]
  )

  return {
    scores,
    processFile
  }
}
