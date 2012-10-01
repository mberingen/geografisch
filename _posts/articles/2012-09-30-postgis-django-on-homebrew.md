---
published: true
layout: article
title: Installing Postgis with Homebrew on Mountain Lion
abstract: How to get a working environment with Django, PostgreSQL, PostGIS with Homebrew
author_twitter: geo_grafisch
author: Marc Beringen
categories:
- articles
---

# Installing Postgis with Homebrew on Mountain Lion.

So I took the big plunge. After several years of adding cruft to my old Snow Leopard installation, it was time for a full clean install.

No problem except for getting PostGIS and Django to play nice. The problem is I like to install most of my stuff with Homebrew. It's just easier. Simply typing 

    brew install postgis
    
Gets you up and running with a minimum amount of fuss. All set up with the latest and greatest in no time. Perfect right?

Wrong! Django isn't ready for PostGIS 2 yet, so I needed 1.5. However, using

    $ brew tap homebrew/versions
    $ brew install postgis15
    
Will try to install Postgres 9.2 which isn't [compatible](http://trac.osgeo.org/postgis/wiki/UsersWikiPostgreSQLPostGIS) with postgis1.5. 

Next up, attempting to install Postgresql9 with:

    brew install postgresql9
    
For me this failed with an uuid-ossp error. Trying [some of the](https://github.com/mxcl/homebrew/issues/10315) [suggestions](https://gist.github.com/3188632) online like 'brew link ossp-uuid' or 'brew unlink ossp-uuid && brew link ossp-uuid' didn't work for me

The trick seems to be that you can ignore this by install with the -dv paramater:

    brew install postgresql9 -dv
    
Where the installation hangs, just type 'exit' ad it will continue with the installation without uuid-ossp
I'm not sure what uuid-ossp does, but I haven't noticed any problems without it. Yet!

Now edit /usr/local/Library/Taps/homebrew-versions/postgis15.rb 

    line 12: depends_on 'postgresql9'
    
    line 30: postgresql = Formula.factory 'postgresql9'
    
and use brew install postgis15 and keep your fingers crossed

