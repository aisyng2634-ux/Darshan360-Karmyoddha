import { AIQueryRequest, AIQueryResponse, Site, Location } from '@/types';

export const SITES: Site[] = [
  {
    slug: 'gwalior',
    name: 'Gwalior Fort',
    description: 'Standing tall on a rocky hill in the heart of Madhya Pradesh, Gwalior Fort is one of the most majestic forts in India. With its rich history spanning centuries, this fort has witnessed the rise and fall of multiple dynasties, including the Mughals, the Tomars, and the Marathas.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    shortDescription: 'A majestic hill fort with 800 years of history'
  },
  {
    slug: 'orchha',
    name: 'Orchha',
    description: 'Nestled in the Narmada River valley, Orchha is a hidden gem of medieval Indian architecture. Founded in the 16th century, this town was once the capital of the Bundela rulers and boasts stunning palaces, temples, and cenotaphs that transport you back in time.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    shortDescription: 'Ancient town of palaces and temples'
  }
];

export const getSiteBySlug = (slug: string): Site | undefined => {
  return SITES.find(site => site.slug === slug);
};

export const getLocationFromSlug = (slug: string): Location | null => {
  const site = getSiteBySlug(slug);
  return site ? site.slug as Location : null;
};

export async function sendAIQuery(
  request: AIQueryRequest
): Promise<AIQueryResponse> {
  try {
    const response = await fetch('/api/ai/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return getMockResponse(request);
  }
}

function getMockResponse(request: AIQueryRequest): AIQueryResponse {
  const { location, mode, audience } = request;
  
  const responses: Record<string, string> = {
    'gwalior-story-kids': `Once upon a time, in a land far, far away, there was a mighty fort built on top of a big hill! 👑 The Gwalior Fort was built about 800 years ago by the brave Tomar kings. They wanted to protect their kingdom from enemies. The fort is so big that it has many palaces inside! One of the most famous things here is the beautiful carved stones that tell stories of brave warriors and princesses. 🎨`,
    'gwalior-story-general': `Gwalior Fort, one of the most formidable forts in central India, has stood as a silent witness to centuries of tumultuous history. Originally constructed in the 8th century, it reached its zenith under the Tomar dynasty in the 15th century. The fort complex encompasses multiple palaces, temples, and courtyards, showcasing exquisite Mughal and Rajput architecture. The renowned Gujari Mahal, now housing a museum, and the intricate carvings of the Sas Bahu Temple are among its notable attractions.`,
    'gwalior-story-expert': `The Gwalior Fort's architectural significance lies in its strategic integration of Islamic and Hindu design elements, particularly evident during the Mughal period under Emperor Akbar's reign. The fort's evolution from the original 8th-century construction to the Tomar fortifications in the 15th century, and subsequent Mughal enhancements, represents a fascinating case study in military architecture. The Sufi saint's prediction that gave the fort its name, and the subsequent Gwalior salt theorem, add layers of historical intrigue to this UNESCO World Heritage candidate.`,
    'gwalior-qa-kids': `Great question! The Gwalior Fort is like a giant castle on a hill. People built it a LONG time ago - about 800 years! It's made of strong stones and has many rooms and secret passages. The kings and queens lived there to stay safe. Today, you can visit and see beautiful paintings and carvings on the walls! 🎨`,
    'gwalior-qa-general': `Gwalior Fort, located in Madhya Pradesh, is one of India's most historically significant forts. Built primarily in the 15th century under the Tomar dynasty, it features notable structures including the Gujari Mahal, Man Singh Palace, and the Sas Bahu Temple. The fort is renowned for its impressive architecture, intricate carvings, and panoramic views of the surrounding area. It has been ruled by various dynasties including the Mughals, Marathas, and Scindias.`,
    'gwalior-qa-expert': `The fort's architectural chronology reveals distinct phases: the initial Tomar construction (1398-1516), Mughal modifications (1542-1752), and Maratha expansions. Key structures include the sandstone Man Singh Palace with its distinctive blue tiles, the Gujari Mahal housing the Archaeological Survey of India museum, and the Teli Ka Mandir temple. The fort's strategic significance derived from its position controlling the north-south trade routes through the Chambal valley.`,
    'orchha-story-kids': `Once upon a time, in a peaceful forest near a winding river, there was a magical town called Orchha! 🏰 The brave Bundela kings built this town with beautiful palaces and temples. The palaces have intricate carvings of gods, goddesses, and mythical creatures! The riverside temples are perfect for watching the sunset. It's like stepping into a fairytale! ✨`,
    'orchha-story-general': `Orchha, meaning "the hidden place," was founded in the 16th century by Rudra Pratap Singh, the first Bundela king. This medieval town flourished as the capital of the Bundela dynasty and showcases a remarkable collection of palaces, temples, and cenotaphs. The Jahangir Mahal, built to honor Emperor Jahangir's visit, exemplifies the unique Bundela architectural style with its intricate chhatris, jali work, and painted walls.`,
    'orchha-story-expert': `The Bundela architectural idiom in Orchha represents a distinct regional style characterized by chhatris, ornate jali lattices, and vibrant wall paintings. The Raja Ram Temple, originally planned as a palace, and the Laxminarayan Temple showcase the evolution of Bundela architecture. The Orchha Historical Complex, including the Jahangir Mahal, Sheesh Mahal, and royal cenotaphs, provides critical insights into the political and cultural history of the Bundela dynasty during the Mughal-Bundela power dynamics.`,
    'orchha-qa-kids': `Orchha is a special town built by kings long ago! The Bundela kings made beautiful palaces with many rooms and pretty paintings. There are also temples by the river where people pray. The best part? The buildings have amazing carvings of animals and stories from ancient times! You can even see monkeys and birds living in the old temples! 🐒`,
    'orchha-qa-general': `Orchha is a historic town in Madhya Pradesh known for its well-preserved medieval architecture. Founded in the 16th century, it served as the capital of the Bundela dynasty. Key attractions include the Jahangir Mahal, a stunning palace built for Emperor Jahangir, the Laxminarayan Temple with its beautiful murals, and theChaturbhuj Temple. The town is also known for its royal cenotaphs along the Betwa River and offers a glimpse into India's rich past away from mainstream tourism.`,
    'orchha-qa-expert': `The Orchha Historical Complex represents the architectural pinnacle of the Bundela dynasty. The Jahangir Mahal's innovative design incorporating both Rajput and Mughal elements, the Sheesh Mahal's mirror work, and the Chaturbhuj Temple's elevation and spire design are notable. The town's cenotaphs (chhatris) along the Betwa River, the Ram Raja Temple's unique status as both a palace and temple, and the Laxminarayan Temple's extensive wall paintings provide comprehensive material for analyzing Bundela urban planning and religious architecture.`
  };

  const key = `${location}-${mode}-${audience}`;
  return {
    text: responses[key] || responses[`${location}-${mode}-general`]
  };
}
