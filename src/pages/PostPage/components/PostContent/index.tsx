import {
  CodeComment,
  CodeContainer,
  CodeType,
  CodeValue,
  PostContentContainer,
  PostSection,
} from './style'

const ONE_SPACE = <span>&nbsp;</span>
const TWO_SPACES = <span>&ensp;</span>
const FOUR_SPACES = <span>&emsp;</span>

export function PostContent() {
  return (
    <PostContentContainer>
      <PostSection>
        <p>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>
          {ONE_SPACE}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>
      </PostSection>
      <PostSection>
        <p>
          <a href="#"> Dynamic typing </a>
        </p>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </PostSection>
      <PostSection>
        <CodeContainer>
          <p>
            <CodeType>let</CodeType> foo = <CodeValue>42</CodeValue>;
            <CodeComment>
              {FOUR_SPACES}
              {FOUR_SPACES}
              {` // foo is now a number`}
            </CodeComment>
          </p>
          <p>
            foo = <CodeValue>{`'bar'`}</CodeValue>;
            <CodeComment>
              {FOUR_SPACES}
              {FOUR_SPACES}
              {FOUR_SPACES}
              {`// foo is now a string`}
            </CodeComment>
          </p>
          <p>
            foo = <CodeValue>{`true`}</CodeValue>;
            <CodeComment>
              {FOUR_SPACES}
              {FOUR_SPACES}
              {FOUR_SPACES}
              {TWO_SPACES}
              {`// foo is now a boolean`}
            </CodeComment>
          </p>
        </CodeContainer>
      </PostSection>
    </PostContentContainer>
  )
}
