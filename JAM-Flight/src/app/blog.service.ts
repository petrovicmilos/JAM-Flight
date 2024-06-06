import { Injectable } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  shortDescription: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Evolution of Commercial Aviation',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Discover how commercial aviation has evolved over the past century, from the early days of flight to the modern era of jet travel.',
      link: '/blog/evolution-of-commercial-aviation'
    },
    {
      id: 2,
      title: 'Top 10 Scenic Flight Routes in the World',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Explore the most breathtaking flight routes around the globe, offering stunning aerial views and unforgettable experiences.',
      link: '/blog/scenic-flight-routes'
    },
    {
      id: 3,
      title: 'The Future of Eco-Friendly Aviation',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Learn about the latest advancements in eco-friendly aviation technology and how the industry is working towards a greener future.',
      link: '/blog/eco-friendly-aviation'
    },
    {
      id: 4,
      title: 'Flying on a Budget: Tips and Tricks',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Find out how to save money on flights with these insider tips and tricks, from booking strategies to finding the best deals.',
      link: '/blog/flying-on-a-budget'
    },
    {
      id: 5,
      title: 'The Science Behind Jet Lag and How to Combat It',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Understand the science behind jet lag and discover effective methods to minimize its impact on your travels.',
      link: '/blog/jet-lag-science'
    },
    {
      id: 6,
      title: 'Luxury in the Skies: The World\'s Best First Class Experiences',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Indulge in the world\'s most luxurious first-class flight experiences, offering unparalleled comfort and service.',
      link: '/blog/luxury-first-class'
    },
    {
      id: 7,
      title: 'Aviation Safety: How Airlines Keep You Safe',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Get an inside look at the rigorous safety measures and protocols airlines implement to ensure passenger safety.',
      link: '/blog/aviation-safety'
    },
    {
      id: 8,
      title: 'The Role of Technology in Modern Aviation',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Explore how cutting-edge technology is shaping the future of aviation, from advanced navigation systems to AI-driven innovations.',
      link: '/blog/technology-in-aviation'
    },
    {
      id: 9,
      title: 'The History of Iconic Airlines',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Dive into the rich history of some of the world\'s most iconic airlines, from their founding stories to their global impact.',
      link: '/blog/history-of-iconic-airlines'
    },
    {
      id: 10,
      title: 'Airline Loyalty Programs: Are They Worth It?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nisi sit amet velit elementum malesuada. Integer vitae maximus metus. Quisque egestas eget justo id ultrices. Vivamus fringilla, velit sed auctor vestibulum, neque libero sollicitudin erat, hendrerit accumsan orci arcu blandit nibh. Aliquam imperdiet pulvinar tellus eu feugiat. Praesent ac nisl urna. Duis sit amet nisl at velit aliquet condimentum. Donec sodales consequat magna in facilisis.

      Duis elementum ut enim eget tempor. Vivamus eu eros eros. Etiam maximus risus eu fringilla eleifend. Sed ultricies odio id aliquam lobortis. Sed nec ligula ac orci ullamcorper luctus. Fusce maximus erat erat, sed commodo dolor ullamcorper et. Sed lacinia in augue id malesuada. Praesent tincidunt nisi in risus luctus, eu bibendum turpis bibendum. Quisque quis molestie nisi. Donec leo diam, commodo at dui nec, feugiat tempor massa. Etiam nibh nunc, vestibulum quis enim non, ultrices vehicula velit. Aliquam consectetur nisi ut neque fermentum, sit amet laoreet lorem fermentum. Etiam laoreet, dolor quis sollicitudin consequat, nulla odio egestas urna, mollis laoreet ipsum erat quis purus. Nullam mollis finibus nunc sit amet viverra. Sed et dolor vel mauris venenatis fermentum.`,
      shortDescription: 'Evaluate the benefits and drawbacks of airline loyalty programs and find out if they\'re worth your investment.',
      link: '/blog/airline-loyalty-programs'
    }
  ];

  constructor() { }

  getBlogPostById(id: number) {
    return this.blogPosts.find(post => post.id === id);
  }

  getAllBlogPosts() {
    return this.blogPosts;
  }
}
