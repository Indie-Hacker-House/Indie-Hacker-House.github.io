import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logo07 from '@/images/logo/Logo-07.png'
import logo02 from '@/images/logo/Logo-02.png'
import logo06 from '@/images/logo/Logo-06.png'
import logo05 from '@/images/logo/Logo-05.png'
import logo04 from '@/images/logo/Logo-04.png'
import logo08 from '@/images/logo/Logo-08.png'
import logoPhobiaDark from '@/images/logo/Logo-00.svg'
import logoPhobiaLight from '@/images/logo/Logo-01.png'
import logo03 from '@/images/logo/Logo-03.png'
import logo09 from '@/images/logo/Logo-09.png'
import logo10 from '@/images/logo/Logo-10.png'
import logo11 from '@/images/logo/Logo-11.png'
import logo12 from '@/images/logo/Logo-12.png'
import logo13 from '@/images/logo/Logo-13.png'
import logo14 from '@/images/logo/Logo-14.png'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Logo03', logo03],
  ['Logo02', logo02],
  ['Phobia', logoPhobiaLight],
  ['Logo04', logo04],
  ['Logo05', logo05],
  ['Logo06', logo06],
  ['Logo07', logo07],
  ['Logo08', logo08],
  ['Logo10', logo10],
  ['Logo09', logo09],
  ['Logo11', logo11],
  ['Logo12', logo12],
  ['Logo13', logo13],
  ['Logo14', logo14],
  
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            社区支持 - Community Support
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="在 Indie Hacker House, 你能得到什么"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        追寻自由，寻找志同道合的伙伴。如果你厌倦了日复一日无止境的职场内卷，想要寻找人生新的可能性，Indie Hacker House就是你要寻找的地方。
        </p>
      </SectionIntro>
      <Container className="mt-16">
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <dt class="font-semibold text-gray-900">灵感碰撞</dt>
            <dd class="mt-1 text-gray-600">我们坚信1+1大于2，思想的交流和碰撞会给Indie Hacker产生更多的价值</dd>
          </div>
          <div>
            <dt class="font-semibold text-gray-900">社区孵化</dt>
            <dd class="mt-1 text-gray-600">我们相信，社区的职责是帮助社区成员在商业上获得回报，同时这些回报也能支持社区走得更远</dd>
          </div>
          <div>
            <dt class="font-semibold text-gray-900">更多的工作机会</dt>
            <dd class="mt-1 text-gray-600">你的下一份工作，不一定要上班。开启Indie Hacker生涯，探索未知领域</dd>
          </div>
          <div>
            <dt class="font-semibold text-gray-900">各领域经验分享</dt>
            <dd class="mt-1 text-gray-600">好玩的精彩的Indie Hacker故事和技术分享</dd>
          </div>
          <div>
            <dt class="font-semibold text-gray-900">找到组队的小伙伴</dt>
            <dd class="mt-1 text-gray-600">Indie Hacker不意味着事必躬亲，相互支持可以帮助你走更远</dd>
          </div>
          <div>
            <dt class="font-semibold text-gray-900">共居体验</dt>
            <dd class="mt-1 text-gray-600">离开了工位后不适应一个人孤单的生活节奏？来Indie Hacker House参与共居和办公(co-living & co-working)</dd>
          </div>
        </dl>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Co-living & co-working"
        title="线下共居空间"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        我们把Indie Hacker House的第一个站点设立在了大理，一个风景优美、社区氛围浓厚、Indie Hacker/数字游民浓度极高的地方
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="共居体验">
            在工作的一天后，你可以在洱海边的草坪尽享飞盘的乐趣，或在人民路的夜市中品尝鲜美的当地美食，或是去酒吧里听jazz放松，还有网球、舞会、高尔夫等各种活动
            </ListItem>
            <ListItem title="沙龙/分享/共学/workshop">
            你可以在这里分享你的产品、创意或构想，同时也能倾听他人的灵感和故事。在这里，我们尊重和理解每一个创意的价值，我们相信，ideas worth separating
            </ListItem>
            <ListItem title="参与共建">
            你的创意不会受到任何束缚，无论是定期的可以是weekly roundup，还是offsite活动，还是某一技术的深度研讨，你都可以在这里实现
            </ListItem>
            <ListItem title="激发创造力">
            你的创意不会受到任何束缚，无论是定期的可以是weekly roundup，还是offsite活动，还是某一技术的深度研讨，你都可以在这里实现。
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Indie Hacker House
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Indie Hacker 们聚集在一起开发，学习，交流，思想碰撞的地方。在这里你可以与志同道合的 Indie Hacker 面对面交流、协作，共同探索技术和创新的无限可能。
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        我们希望通过线下社区打破 Indie Hacker 单打独斗的状态，促进协作和链接。
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
