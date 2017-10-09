const DELAY_THRESHOLD = 1000
var t9 = true
var startTime, endTime
var lastPressed=10
var numOfSamePresses=0
var activeTyping=false
var timeout
var stopwatchStart,stopwatchEnd
var dict = "a,2;abilities,224548437;ability,2245489;ability's,22454897;able,2253;about,22688;above,22683;absence,2273623;absolute,22765883;absolutely,2276588359;abuse,22873;academic,22233642;accept,222378;acceptable,2223782253;accepted,22237833;accepting,222378464;accepts,2223787;access,222377;accessible,2223774253;accident,22243368;accidental,2224336825;accidentally,222433682559;accord,222673;accorded,22267333;according,222673464;accordingly,22267346459;accords,2226737;account,2226868;account's,22268687;accounts,22268687;accuracy,22287229;accurate,22287283;achieve,2244383;achieved,22443833;achieves,22443837;achieving,224438464;acquire,2278473;acquired,22784733;acquires,22784737;acquiring,227847464;across,227677;act,228;act's,2287;acted,22833;acting,228464;action,228466;action's,2284667;actions,2284667;active,228483;activities,2284848437;activity,22848489;activity's,228484897;acts,2287;actual,228825;actually,22882559;add,233;added,23333;adding,233464;addition,23348466;additional,2334846625;address,2337377;address's,23373777;addressed,233737733;addresses,233737737;addressing,2337377464;adds,2337;adequate,23378283;adjust,235878;administration,23646478728466;admit,23648;admits,236487;admitted,23648833;admittedly,2364883359;admitting,236488464;adopt,23678;adopted,2367833;adopting,23678464;adopts,236787;advance,2382623;advanced,23826233;advances,23826237;advancing,238262464;advantage,238268243;advantage's,2382682437;advantages,2382682437;advertise,238378473;advertised,2383784733;advertises,2383784737;advertising,23837847464;advice,238423;advise,238473;advised,2384733;advises,2384737;advising,23847464;affair,233247;affair's,2332477;affairs,2332477;affect,233328;affect's,2333287;affected,23332833;affecting,233328464;affects,2333287;afford,233673;afraid,237243;after,23837;afternoon,238376666;afterwards,2383792737;again,24246;against,2424678;age,243;age's,2437;agency,243629;ages,2437;ago,246;agree,24733;agreed,247333;agreeing,24733464;agreement,247336368;agrees,247337;ahead,24323;aid,243;aim,246;aimed,24633;aiming,246464;aims,2467;air,247;alarm,25276;album,25286;algorithm,254674846;algorithm's,2546748467;algorithms,2546748467;alias,25427;alive,25483;all,255;allow,25569;allowed,2556933;allowing,25569464;allows,255697;almost,256678;alone,25663;along,25664;already,2573239;also,2576;alter,25837;altered,2583733;altering,25837464;alternate,258376283;alternative,25837628483;alternative's,258376284837;alternatively,2583762848359;alternatives,258376284837;alters,258377;although,25846844;altogether,2586438437;always,259297;am,26;ambiguous,262448687;amount,266868;amount's,2668687;amounts,2668687;amuse,26873;amused,268733;amuses,268737;amusing,2687464;an,26;analogue,26256483;analysis,26259747;ancient,2624368;and,263;angle,26453;angry,26479;animal,264625;announce,26668623;announcement,266686236368;annoy,26669;annoyed,2666933;annoying,26669464;annoys,266697;annual,266825;anonymous,266696687;another,2668437;answer,267937;answer's,2679377;answered,26793733;answering,267937464;answers,2679377;any,269;anybody,2692639;anyone,269663;anyplace,26975223;anything,26984464;anyway,269929;anywhere,26994373;apart,27278;apologies,276564437;apology,2765649;apology's,27656497;apparent,27727368;apparently,2772736859;appeal,277325;appear,277327;appearance,2773272623;appeared,27732733;appearing,277327464;appears,2773277;apple,27753;application,27754228466;application's,277542284667;applications,277542284667;applied,2775433;applies,2775437;apply,27759;applying,27759464;appreciate,2777324283;appreciated,27773242833;appreciates,27773242837;appreciating,277732428464;approach,27776224;appropriate,27776774283;approval,27776825;approve,2777683;approved,27776833;approves,27776837;approving,277768464;arbitrary,272487279;are,273;area,2732;area's,27327;areas,27327;argue,27483;argued,274833;argues,274837;arguing,2748464;argument,27486368;argument's,274863687;arguments,274863687;arise,27473;arises,274737;arithmetic,2748463842;arm,276;army,2769;around,276863;arrange,2772643;arranged,27726433;arrangement,27726436368;arrangement's,277264363687;arrangements,277264363687;arranges,27726437;arranging,277264464;arrive,277483;arrived,2774833;arrives,2774837;arriving,27748464;art,278;article,2784253;article's,27842537;articles,27842537;artificial,2784342425;artist,278478;as,27;aside,27433;ask,275;asked,27533;asking,275464;asks,2757;asleep,275337;aspect,277328;aspect's,2773287;aspects,2773287;assembler,277362537;assembly,27736259;assistant,277478268;associate,277624283;associated,2776242833;associates,2776242837;associating,27762428464;association,27762428466;assume,277863;assumed,2778633;assumes,2778637;assuming,27786464;assumption,2778678466;assure,277873;assured,2778733;assures,2778737;assuring,27787464;at,28;ate,283;atmosphere,2866774373;attach,288224;attached,28822433;attaching,288224464;attachés,2882247;attack,288225;attempt,2883678;attempt's,28836787;attempted,288367833;attempting,2883678464;attempts,28836787;attend,288363;attended,28836333;attending,288363464;attends,2883637;attention,288368466;attitude,28848833;attract,2887228;attractive,2887228483;audience,28343623;author,288467;author's,2884677;authorities,28846748437;authority,288467489;authority's,2884674897;authors,2884677;automatic,288662842;automatically,2886628422559;automobile,2886662453;autumn,288866;autumn's,2888667;available,282452253;average,2837243;avoid,28643;avoided,2864333;avoiding,28643464;avoids,286437;awake,29253;award,29273;aware,29273;away,2929;awful,29385;awkward,2959273;back,2225;backed,222533;background,2225476863;backing,2225464;backs,22257;backwards,222592737;bad,223;badly,22359;balance,2252623;ball,2255;ban,226;band,2263;bank,2265;bar,227;bar's,2277;bars,2277;base,2273;based,22733;bases,22737;basic,22742;basically,227422559;basing,227464;basis,22747;battery,2288379;be,23;bear,2327;bear's,23277;bearing,2327464;bears,23277;beautiful,232884385;became,232263;because,2322873;become,232663;becomes,2326637;becoming,23266464;bed,233;been,2336;before,233673;beforehand,2336734263;began,23426;begin,23446;beginning,234466464;begins,234467;begun,23486;behalf,234253;behave,234283;behind,234463;being,23464;believe,2354383;believed,23543833;believes,23543837;believing,235438464;belong,235664;belongs,2356647;below,23569;benefit,2363348;benefit's,23633487;benefits,23633487;besides,2374337;best,2378;bet,238;bets,2387;better,238837;betting,2388464;between,2389336;beyond,239663;bid,243;bidding,2433464;bids,2437;big,244;bigger,244437;biggest,2444378;bill,2455;binary,246279;bind,2463;binding,2463464;binds,24637;biology,2465649;bit,248;bit's,2487;bite,2483;bites,24837;biting,248464;bits,2487;bitten,248836;bizarre,2492773;black,25225;blame,25263;blank,25265;block,25625;blow,2569;blue,2583;board,26273;board's,262737;boards,262737;boat,2628;bodies,263437;body,2639;body's,26397;book,2665;book's,26657;books,26657;boot,2668;bore,2673;borne,26763;borrow,267769;borrowed,26776933;borrowing,267769464;borrows,2677697;both,2684;bother,268437;bothered,26843733;bothering,268437464;bothers,2684377;bottle,268853;bottom,268866;bought,268448;bound,26863;box,269;box's,2697;boxes,26937;boy,269;bracket,2722538;bracket's,27225387;brackets,27225387;branch,272624;branch's,2726247;branches,27262437;brand,27263;breach,273224;break,27325;break's,273257;breaking,27325464;breaks,273257;bridge,274343;brief,27433;briefly,2743359;bright,274448;bring,27464;bringing,27464464;brings,274647;broadcast,276232278;broadcasting,276232278464;broadcasts,2762322787;broke,27653;broken,276536;brother,2768437;brought,2768448;brown,27696;bucket,282538;budget,283438;buffer,283337;bug,284;bug's,2847;bugs,2847;build,28453;building,28453464;building's,284534647;buildings,284534647;builds,284537;built,28458;bulk,2855;bulletin,28553846;buried,287433;buries,287437;bury,2879;burying,2879464;bus,287;business,28746377;busy,2879;but,288;button,288866;buy,289;buying,289464;buys,2897;by,29;byte,2983;byte's,29837;bytes,29837;calculate,225285283;calculation,22528528466;calculation's,225285284667;calculations,225285284667;call,2255;call's,22557;called,225533;calling,2255464;calls,22557;came,2263;campaign,22672446;can,226;candidate,226343283;cannot,226668;capable,2272253;capacity,22722489;capital,2274825;captain,2278246;car,227;card,2273;card's,22737;cardboard,227326273;cards,22737;care,2273;care's,22737;careful,2273385;carefully,227338559;cares,22737;carried,2277433;carries,2277437;carry,22779;carry's,227797;carrying,22779464;case,2273;case's,22737;cases,22737;cassette,22773883;cat,228;catch,22824;catches,2282437;catching,22824464;categories,2283467437;category,22834679;category's,228346797;caught,228448;cause,22873;cause's,228737;caused,228733;causes,228737;causing,2287464;cease,23273;cell,2355;cent,2368;central,2368725;century,2368879;certain,2378246;certainly,237824659;chain,24246;chair,24247;chairman,24247626;chance,242623;chance's,2426237;chances,2426237;change,242643;change's,2426437;changed,2426433;changes,2426437;changing,24264464;channel,2426635;channel's,24266357;channels,24266357;chaos,24267;chapter,2427837;char,2427;char's,24277;character,242722837;character's,2427228377;characters,2427228377;charge,242743;charge's,2427437;charged,2427433;charges,2427437;charging,24274464;chars,24277;cheap,24327;cheaper,2432737;cheapest,24327378;check,24325;check's,243257;checked,2432533;checking,24325464;checks,243257;chemical,24364225;child,24453;child's,244537;children,24453736;chip,2447;chip's,24477;chips,24477;choice,246423;choose,246673;chooses,2466737;choosing,24667464;chose,24673;chosen,246736;church,248724;circle,247253;circuit,2472848;circulation,24728528466;circumstance,247286782623;circumstance's,2472867826237;circumstances,2472867826237;citizen,2484936;city,2489;claim,25246;claim's,252467;claimed,2524633;claiming,25246464;claims,252467;clarify,2527439;class,25277;class's,252777;classes,2527737;clean,25326;clear,25327;cleared,2532733;clearer,2532737;clearest,25327378;clearing,25327464;clearly,2532759;clears,253277;clever,253837;clock,25625;close,25673;closed,256733;closely,2567359;closer,256737;closes,256737;closest,2567378;closing,2567464;club,2582;clue,2583;code,2633;code's,26337;coded,26333;codes,26337;coding,263464;coffee,263333;cold,2653;collapse,26552773;collect,2655328;collected,265532833;collecting,2655328464;collection,2655328466;collects,26553287;college,2655343;college's,26553437;colleges,26553437;column,265866;combination,26624628466;combination's,266246284667;combinations,266246284667;combine,2662463;combined,26624633;combines,26624637;combining,266246464;come,2663;comes,26637;coming,266464;command,2666263;command's,26662637;commands,26662637;comment,2666368;comment's,26663687;commented,266636833;commenting,2666368464;comments,26663687;commercial,2666372425;commission,2666477466;commitment,2666486368;committee,266648833;common,266666;commonly,26666659;communicate,26668642283;communication,2666864228466;communication's,26668642284667;communications,26668642284667;community,266686489;company,2667269;comparable,2667272253;comparatively,2667272848359;compare,2667273;compared,26672733;compares,26672737;comparing,266727464;comparison,2667274766;compatibility,2667284245489;compatible,2667284253;competition,26673848466;compiler,26674537;complain,26675246;complained,2667524633;complaining,26675246464;complains,266752467;complaint,266752468;complaint's,2667524687;complaints,2667524687;complete,26675383;completed,266753833;completely,2667538359;completes,266753837;completing,2667538464;complex,2667539;complexity,2667539489;complicate,2667542283;complicated,26675422833;complicates,26675422837;complicating,266754228464;component,266766368;component's,2667663687;components,2667663687;compose,2667673;composed,26676733;composes,26676737;composing,266767464;composition,26676748466;comprehensive,2667734367483;compromise,2667766473;compulsory,2667857679;compute,2667883;computed,26678833;computer,26678837;computer's,266788377;computers,266788377;computes,26678837;computing,266788464;concept,2662378;concern,2662376;concern's,26623767;concerned,266237633;concerning,2662376464;concerns,26623767;conclusion,2662587466;concrete,26627383;condition,266348466;condition's,2663484667;conditions,2663484667;conference,2663373623;confident,266343368;confirm,2663476;confirmed,266347633;confirming,2663476464;confirms,26634767;confuse,2663873;confused,26638733;confuses,26638737;confusing,266387464;confusion,266387466;connect,2666328;connected,266632833;connecting,2666328464;connection,2666328466;connection's,26663284667;connections,26663284667;connects,26663287;consequence,26673783623;consequence's,266737836237;consequences,266737836237;consequently,266737836859;consider,26674337;considerable,266743372253;considerably,266743372259;consideration,2667433728466;considered,2667433733;considering,26674337464;considers,266743377;consist,2667478;consistency,26674783629;consistent,2667478368;consists,26674787;constant,26678268;constraint,2667872468;constraint's,26678724687;constraints,26678724687;construct,266787828;consumption,26678678466;contact,2668228;contain,2668246;contained,266824633;containing,2668246464;contains,26682467;content,2668368;content's,26683687;contents,26683687;context,2668398;continually,26684682559;continuation,266846828466;continue,26684683;continued,266846833;continues,266846837;continuing,2668468464;continuous,2668468687;continuously,266846868759;contract,26687228;contrary,26687279;contrast,26687278;contribute,2668742883;contribution,266874288466;contribution's,2668742884667;contributions,2668742884667;control,2668765;control's,26687657;controlled,2668765533;controlling,26687655464;controls,26687657;convenient,2668364368;convention,2668368466;convention's,26683684667;conventional,266836846625;conventions,26683684667;conversation,266837728466;convert,2668378;convince,26684623;convinced,266846233;convinces,266846237;convincing,2668462464;cope,2673;copied,267433;copies,267437;copy,2679;copy's,26797;copying,2679464;core,2673;corner,267637;corner's,2676377;corners,2676377;correct,2677328;corrected,267732833;correcting,2677328464;correction,2677328466;correctly,267732859;corrects,26773287;corrupt,2677878;corrupted,267787833;corrupting,2677878464;corrupts,26778787;cost,2678;cost's,26787;costing,2678464;costs,26787;could,26853;council,2686245;count,26868;count's,268687;counted,2686833;counter,2686837;counting,26868464;country,2686879;counts,268687;county,268689;couple,268753;course,268773;course's,2687737;courses,2687737;court,26878;cover,26837;cover's,268377;covered,2683733;covering,26837464;covers,268377;crash,27274;crash's,272747;crashed,2727433;crashes,2727437;crashing,27274464;crazy,27299;create,273283;created,2732833;creates,2732837;creating,27328464;creation,27328466;creature,27328873;credit,273348;crisis,274747;crisp,27477;crisp's,274777;crisps,274777;critical,27484225;criticism,274842476;cross,27677;cry,279;cs,27;culture,2858873;cumming,2866464;cums,2867;cup,287;cure,2873;curious,2874687;current,2877368;currently,287736859;cursor,287767;customer,28786637;cut,288;cuts,2887;cutting,2888464;cycle,29253;cycle's,292537;cycles,292537;daily,32459;damage,326243;damaged,3262433;damages,3262437;damaging,32624464;danger,326437;dangerous,326437687;dare,3273;dark,3275;data,3282;database,32822273;date,3283;date's,32837;dated,32833;dates,32837;dating,328464;datum,32886;datum's,328867;day,329;day's,3297;days,3297;dead,3323;dead's,33237;deal,3325;deal's,33257;dealing,3325464;deals,33257;dealt,33258;dear,3327;death,33284;debate,332283;decade,332233;decent,332368;decide,332433;decided,3324333;decides,3324337;deciding,33243464;decision,33247466;decision's,332474667;decisions,332474667;declare,3325273;declared,33252733;declares,33252737;declaring,332527464;decrease,33273273;dedicate,33342283;dedicated,333422833;dedicates,333422837;dedicating,3334228464;deduce,333823;deem,3336;deemed,333633;deeming,3336464;deems,33367;deep,3337;deeply,333759;default,3332858;define,333463;defined,3334633;defines,3334637;defining,33346464;definite,33346483;definitely,3334648359;definition,3334648466;definition's,33346484667;definitions,33346484667;definitive,3334648483;degree,334733;degree's,3347337;degrees,3347337;delay,33529;delete,335383;deleted,3353833;deletes,3353837;deleting,33538464;deliberate,3354237283;deliberately,335423728359;deliver,3354837;delivered,335483733;delivering,3354837464;delivers,33548377;delivery,33548379;demand,336263;demand's,3362637;demands,3362637;democratic,3366272842;demonstrate,33666787283;demonstration,3366678728466;department,3372786368;depend,337363;depended,33736333;depending,337363464;depends,3373637;depth,33784;derive,337483;derived,3374833;derives,3374837;deriving,33748464;describe,33727423;described,337274233;describes,337274237;describing,3372742464;description,33727478466;description's,337274784667;descriptions,337274784667;design,337446;designed,33744633;designing,337446464;designs,3374467;desirable,337472253;desire,337473;desired,3374733;desires,3374737;desiring,33747464;desk,3375;desperate,337737283;despite,3377483;destroy,3378769;destroyed,337876933;destroying,3378769464;destroys,33787697;detail,338245;detail's,3382457;detailed,33824533;detailing,338245464;details,3382457;detect,338328;detected,33832833;detecting,338328464;detects,3383287;determine,338376463;determined,3383764633;determines,3383764637;determining,33837646464;develop,3383567;developed,338356733;developing,3383567464;development,33835676368;develops,33835677;device,338423;device's,3384237;devices,3384237;devote,338683;devoted,3386833;devotes,3386837;devoting,33868464;dictionary,3428466279;did,343;die,343;died,3433;dies,3437;differ,343337;difference,3433373623;difference's,34333736237;differences,34333736237;different,343337368;differently,34333736859;difficult,343342858;difficulties,343342858437;difficulty,3433428589;difficulty's,34334285897;digit,34448;digit's,344487;digital,3444825;digits,344487;dinner,346637;direct,347328;directed,34732833;directing,347328464;direction,347328466;direction's,3473284667;directions,3473284667;directly,34732859;director,34732867;directory,347328679;directs,3473287;dirty,34789;disadvantage,347238268243;disagree,34724733;disappear,347277327;disappeared,34727732733;disappearing,347277327464;disappears,3472773277;disaster,34727837;disc,3472;disc's,34727;discipline,3472475463;discount,34726868;discourage,3472687243;discouraged,34726872433;discourages,34726872437;discouraging,347268724464;discover,34726837;discovered,3472683733;discovering,34726837464;discovers,347268377;discs,34727;discuss,3472877;discussed,347287733;discusses,347287737;discussing,3472877464;discussion,3472877466;discussion's,34728774667;discussions,34728774667;disk,3475;dislike,3475453;display,3477529;displayed,347752933;displaying,3477529464;displays,34775297;distance,34782623;distant,3478268;distinct,34784628;distinction,34784628466;distinctly,3478462859;distinguish,34784648474;distribute,3478742883;distributed,34787428833;distributes,34787428837;distributing,347874288464;distribution,347874288466;district,34787428;disturb,3478872;disturbed,347887233;disturbing,3478872464;disturbs,34788727;ditto,34886;divide,348433;divided,3484333;divides,3484337;dividing,34843464;division,34847466;do,36;document,36286368;document's,362863687;documentation,3628636828466;documented,3628636833;documenting,36286368464;documents,362863687;doe,363;doe's,3637;does,3637;dog,364;doing,36464;dollar,365527;domain,366246;done,3663;door,3667;door's,36677;doors,36677;double,368253;doubt,36828;doubtful,36828385;down,3696;dozen,36936;dozen's,369367;dozens,369367;drastic,3727842;draw,3729;draw's,37297;drawing,3729464;drawn,37296;draws,37297;dream,37326;drew,3739;drink,37465;drive,37483;drive's,374837;driven,374836;driver,374837;driver's,3748377;drivers,3748377;drives,374837;driving,3748464;drop,3767;dropped,3767733;dropping,37677464;drops,37677;drove,37683;dry,379;dubious,3824687;due,383;dumb,3862;dump,3867;during,387464;duty,3889;dying,39464;each,3224;earlier,3275437;earliest,32754378;early,32759;earth,32784;ease,3273;easier,327437;easiest,3274378;easily,327459;east,3278;easy,3279;eat,328;eaten,32836;eating,328464;eats,3287;economic,32666642;economy,3266669;edge,3343;edit,3348;edited,334833;editing,3348464;edition,3348466;editor,334867;editor's,3348677;editors,3348677;edits,33487;education,338228466;educational,33822846625;effect,333328;effect's,3333287;effective,333328483;effectively,33332848359;effects,3333287;efficient,333424368;effort,333678;effort's,3336787;efforts,3336787;eight,34448;either,348437;elect,35328;elected,3532833;electing,35328464;election,35328466;electric,35328742;electronic,3532876642;electronics,35328766427;elects,353287;element,3536368;element's,35363687;elements,35363687;elevator,35382867;else,3573;elsewhere,357394373;embarrass,362277277;embarrassed,36227727733;embarrasses,36227727737;embarrassing,362277277464;emergency,363743629;emphasis,36742747;employee,36756933;empty,36789;enable,362253;enables,3622537;encounter,362686837;encountered,36268683733;encountering,362686837464;encounters,3626868377;encourage,362687243;encouraged,3626872433;encourages,3626872437;encouraging,36268724464;end,363;end's,3637;ended,36333;ending,363464;ends,3637;enemy,36369;engineer,36446337;engineer's,364463377;engineered,3644633733;engineering,36446337464;engineers,364463377;enjoy,36569;enormous,36676687;enough,366844;ensure,367873;ensured,3678733;ensures,3678737;ensuring,36787464;enter,36837;entered,3683733;entering,36837464;enters,368377;entire,368473;entirely,36847359;entitle,3684853;entitled,36848533;entitles,36848537;entitling,368485464;entity,368489;entrance,36872623;entries,3687437;entry,36879;entry's,368797;environment,36847666368;equal,37825;equally,3782559;equipment,378476368;equivalent,3784825368;eraser,372737;err,377;error,37767;error's,377677;errors,377677;escape,372273;especially,3773242559;essential,377368425;essentially,37736842559;establish,378225474;established,37822547433;establishes,37822547437;establishing,378225474464;establishment,3782254746368;estimate,37846283;even,3836;evened,383633;evening,3836464;evening's,38364647;evenings,38364647;evens,38367;event,38368;event's,383687;events,383687;eventually,3836882559;ever,3837;every,38379;everybody,383792639;everyone,38379663;everything,3837984464;everywhere,3837994373;evidence,38433623;exact,39228;exactly,3922859;examine,3926463;examined,39264633;examines,39264637;examining,392646464;example,3926753;example's,39267537;examples,39267537;excellent,392355368;except,392378;exception,392378466;exception's,3923784667;exceptions,3923784667;excess,392377;excessive,392377483;exchange,39242643;exclude,3925833;excluded,39258333;excludes,39258337;excluding,392583464;exclusive,392587483;excuse,392873;execute,3932883;executed,39328833;executes,39328837;executing,393288464;exercise,39372473;exist,39478;existed,3947833;existence,394783623;existing,39478464;exists,394787;expand,397263;expanded,39726333;expanding,397263464;expands,3972637;expansion,397267466;expect,397328;expected,39732833;expecting,397328464;expects,3973287;expense,3973673;expensive,397367483;experience,3973743623;experience's,39737436237;experienced,39737436233;experiences,39737436237;experiencing,397374362464;experiment,3973746368;experiment's,39737463687;experimental,397374636825;experiments,39737463687;expert,397378;expert's,3973787;experts,3973787;explain,3975246;explained,397524633;explaining,3975246464;explains,39752467;explanation,39752628466;explicit,39754248;express,3977377;expressed,397737733;expresses,397737737;expressing,3977377464;expression,3977377466;extend,398363;extended,39836333;extending,398363464;extends,3983637;extension,398367466;extensive,398367483;extent,398368;external,39837625;extra,39872;extract,3987228;extreme,3987363;extremely,398736359;eye,393;eye's,3937;eyes,3937;face,3223;facilities,3224548437;facility,32245489;facility's,322454897;fact,3228;fact's,32287;factor,322867;factor's,3228677;factors,3228677;facts,32287;fail,3245;fail's,32457;failed,324533;failing,3245464;fails,32457;failure,3245873;fair,3247;fairly,324759;faith,32484;fall,3255;fall's,32557;fallen,325536;falling,3255464;falls,32557;false,32573;familiar,32645427;family,326459;famous,326687;fan,326;fancy,32629;far,327;farm,3276;farther,3278437;farthest,32784378;fashion,3274466;fast,3278;faster,327837;fastest,3278378;fatal,32825;fate,3283;father,328437;fault,32858;fault's,328587;faults,328587;fear,3327;feasible,33274253;feature,3328873;feature's,33288737;features,33288737;fed,333;federal,3333725;feed,3333;feedback,33332225;feeding,3333464;feeds,33337;feel,3335;feel's,33357;feeling,3335464;feels,33357;feet,3338;fell,3355;felt,3358;few,339;fewer,33937;fewest,339378;field,34353;field's,343537;fields,343537;fight,34448;figure,344873;figure's,3448737;figures,3448737;file,3453;file's,34537;filed,34533;files,34537;filing,345464;fill,3455;filled,345533;filling,3455464;fills,34557;film,3456;final,34625;finally,3462559;financial,346262425;find,3463;find's,34637;finding,3463464;finds,34637;fine,3463;finger,346437;finger's,3464377;fingers,3464377;finish,346474;finished,34647433;finishes,34647437;finishing,346474464;finite,346483;fire,3473;firm,3476;firmly,347659;first,34778;firstly,3477859;fiscal,347225;fish,3474;fish's,34747;fishes,347437;fit,348;fit's,3487;fits,3487;fitted,348833;fitting,3488464;five,3483;fix,349;fixed,34933;fixes,34937;fixing,349464;flag,3524;flash,35274;flashed,3527433;flashes,3527437;flashing,35274464;flat,3528;flew,3539;flexible,35394253;flied,35433;flies,35437;flight,354448;float,35628;floated,3562833;floating,35628464;floats,356287;floor,35667;flow,3569;flown,35696;fly,359;fly's,3597;flying,359464;folk,3655;folk's,36557;folks,36557;follow,365569;followed,36556933;following,365569464;follows,3655697;food,3663;foot,3668;foot's,36687;for,367;force,36723;force's,367237;forced,367233;forces,367237;forcing,3672464;foreign,3673446;forever,3673837;forget,367438;forgets,3674387;forgetting,3674388464;forgot,367468;forgotten,367468836;form,3676;form's,36767;formal,367625;format,367628;formed,367633;former,367637;forming,3676464;forms,36767;forth,36784;forthcoming,36784266464;fortunately,36788628359;fortune,3678863;forward,3679273;found,36863;four,3687;fourth,368784;fraction,37228466;frame,37263;free,3733;freedom,3733366;freely,373359;french,373624;frequent,37378368;frequently,3737836859;fresh,37374;friend,374363;friend's,3743637;friendly,37436359;friends,3743637;fries,37437;from,3766;front,37668;fry,379;fry's,3797;full,3855;fully,38559;fun,386;function,38628466;function's,386284667;functions,386284667;fund,3863;fund's,38637;fundamental,38632636825;fundamentally,3863263682559;funds,38637;funny,38669;further,3878437;furthest,38784378;future,388873;gain,4246;gained,424633;gaining,4246464;gains,42467;game,4263;game's,42637;games,42637;gap,427;garbage,4272243;garden,427336;gas,427;gasoline,42765463;gather,428437;gave,4283;general,4363725;generally,436372559;generate,43637283;generated,436372833;generates,436372837;generating,4363728464;generation,4363728466;genuine,4368463;get,438;get's,4387;gets,4387;getting,4388464;girl,4475;give,4483;given,44836;gives,44837;giving,448464;glad,4523;glass,45277;global,456225;go,46;go's,467;goes,4637;going,46464;gone,4663;good,4663;goods,46637;got,468;gotten,468836;government,4683766368;governor,46837667;gradually,472382559;graduate,47238283;grand,47263;grand's,472637;grands,472637;grant,47268;granted,4726833;granting,47268464;grants,472687;graph,47274;graphic,4727442;graphic's,47274427;graphics,47274427;grateful,47283385;grave,47283;great,47328;greater,4732837;greatest,47328378;greatly,4732859;green,47336;grew,4739;grind,47463;grinding,47463464;grinds,474637;gross,47677;gross's,476777;grosses,4767737;ground,476863;ground's,4768637;grounds,4768637;group,47687;group's,476877;groups,476877;grow,4769;growing,4769464;grown,47696;grows,47697;growth,476984;guarantee,482726833;guaranteed,4827268333;guaranteeing,482726833464;guarantees,4827268337;guard,48273;guess,48377;guessed,4837733;guesses,4837737;guessing,48377464;guide,48433;gun,486;guy,489;habit,42248;habit's,422487;habits,422487;hack,4225;had,423;hair,4247;half,4253;hall,4255;hand,4263;hand's,42637;handed,426333;handing,4263464;handle,426353;handled,4263533;handles,4263537;handling,42635464;hands,42637;handy,42639;hang,4264;hanged,426433;hanging,4264464;hangs,42647;happen,427736;happened,42773633;happening,427736464;happens,4277367;happily,4277459;happy,42779;hard,4273;harder,427337;hardest,4273378;hardly,427359;hardware,42739273;harm,4276;harmful,4276385;harmless,42765377;has,427;hat,428;hate,4283;have,4283;having,428464;he,43;he's,437;head,4323;head's,43237;headed,432333;header,432337;heading,4323464;heads,43237;health,432584;healthy,4325849;hear,4327;heard,43273;hearing,4327464;hears,43277;heart,43278;heat,4328;heavily,4328459;heavy,43289;held,4353;hell,4355;hello,43556;help,4357;helped,435733;helpful,4357385;helping,4357464;helps,43577;hence,43623;her,437;here,4373;hereby,437329;herself,4377353;hes,437;hid,443;hidden,443336;hide,4433;hides,44337;hiding,443464;high,4444;higher,444437;highest,4444378;highly,444459;hill,4455;him,446;himself,4467353;hint,4468;hint's,44687;hints,44687;his,447;historical,4478674225;history,4478679;hit,448;hit's,4487;hits,4487;hitting,4488464;hold,4653;hold's,46537;holding,4653464;holds,46537;hole,4653;hole's,46537;holes,46537;holiday,4654329;holiday's,46543297;holidays,46543297;home,4663;honest,466378;hope,4673;hoped,46733;hopefully,467338559;hopes,46737;hoping,467464;horrible,46774253;horse,46773;horse's,467737;horses,467737;hospital,46774825;host,4678;hot,468;hotel,46835;hour,4687;hour's,46877;hours,46877;house,46873;how,469;however,4693837;huge,4843;human,48626;hundred,4863733;hundred's,48637337;hundreds,48637337;hung,4864;hunt,4868;hurry,48779;husband,4872263;ice,423;idea,4332;idea's,43327;ideal,43325;ideas,43327;identical,433684225;identify,43368439;identity,43368489;if,43;ignore,446673;ignored,4466733;ignores,4466737;ignoring,44667464;ill,455;illegal,4553425;image,46243;image's,462437;images,462437;imagination,46244628466;imagine,4624463;immediate,466334283;immediately,46633428359;impact,467228;implement,467536368;implemented,46753636833;implementing,467536368464;implements,4675363687;implication,46754228466;implication's,467542284667;implications,467542284667;implied,4675433;implies,4675437;imply,46759;implying,46759464;importance,4676782623;important,467678268;importantly,46767826859;impose,467673;imposed,4676733;imposes,4676737;imposing,46767464;impossible,4676774253;impression,4677377466;improve,4677683;improved,46776833;improvement,46776836368;improvement's,467768363687;improvements,467768363687;improves,46776837;improving,467768464;in,46;inability,462245489;inadequate,4623378283;inch,4624;inch's,46247;inches,462437;incident,46243368;incidentally,462433682559;incline,4625463;inclined,46254633;inclines,46254637;inclining,462546464;include,4625833;included,46258333;includes,46258337;including,462583464;income,462663;incompatible,462667284253;incomplete,4626675383;inconsistent,462667478368;inconvenience,4626683643623;incorrect,462677328;increase,46273273;increase's,462732737;increased,462732733;increases,462732737;increasing,4627327464;indeed,463333;independent,46337363368;independently,4633736336859;index,46339;indicate,46342283;indicates,463422837;indication,4634228466;individual,4634843825;individual's,46348438257;individually,463484382559;individuals,46348438257;industrial,4638787425;industry,46387879;inevitably,4638482259;inferior,46337467;infinite,46346483;influence,463583623;info,4636;inform,463676;information,46367628466;informed,46367633;informing,463676464;informs,4636767;initial,4648425;initial's,46484257;initially,464842559;initials,46484257;inner,46637;innocent,46662368;input,46788;inputs,467887;inputted,46788833;inputting,467888464;insert,467378;inserted,46737833;inserting,467378464;inserts,4673787;inside,467433;insist,467478;insisted,46747833;insisting,467478464;insists,4674787;install,4678255;installed,467825533;installing,4678255464;installs,46782557;instance,46782623;instant,4678268;instantly,467826859;instead,4678323;institution,46784888466;institution's,467848884667;institutions,467848884667;instruction,46787828466;instruction's,467878284667;instructions,467878284667;insurance,467872623;integer,4683437;integer's,46834377;integers,46834377;integral,46834725;intelligence,468355443623;intelligent,46835544368;intend,468363;intended,46836333;intending,468363464;intends,4683637;intention,468368466;interact,46837228;interest,46837378;interest's,468373787;interested,4683737833;interesting,46837378464;interests,468373787;interface,468373223;internal,46837625;international,4683762846625;interpret,468377738;interpretation,46837773828466;interpreted,46837773833;interpreting,468377738464;interprets,4683777387;interval,46837825;interval's,468378257;intervals,468378257;intervention,468378368466;into,4686;introduce,468763823;introduced,4687638233;introduces,4687638237;introducing,46876382464;introduction,468763828466;invalid,4682543;invariably,4682742259;invent,468368;invented,46836833;inventing,468368464;invents,4683687;investigate,46837844283;invisible,468474253;invitation,4684828466;invite,468483;invited,4684833;invites,4684837;inviting,46848464;involve,4686583;involved,46865833;involves,46865837;involving,468658464;irrelevant,4773538268;irritate,47748283;irritated,477482833;irritates,477482837;irritating,4774828464;is,47;isolate,4765283;isolated,47652833;isolates,47652837;isolating,476528464;issue,47783;issue's,477837;issued,477833;issues,477837;issuing,4778464;it,48;it's,487;item,4836;item's,48367;items,48367;its,487;itself,487353;job,562;job's,5627;jobs,5627;join,5646;joined,564633;joining,5646464;joins,56467;joint,56468;joke,5653;joy,569;judge,58343;jump,5867;jump's,58677;jumps,58677;junk,5865;just,5878;justification,5878434228466;justified,587843433;justifies,587843437;justify,5878439;justifying,5878439464;keen,5336;keep,5337;keep's,53377;keeping,5337464;keeps,53377;kept,5378;key,539;key's,5397;keyboard,53926273;keys,5397;kid,543;kill,5455;killed,545533;killing,5455464;kills,54557;kind,5463;kind's,54637;kindly,546359;kinds,54637;king,5464;knew,5639;knock,56625;knocked,5662533;knocking,56625464;knocks,566257;know,5669;knowing,5669464;knowledge,566953343;known,56696;knows,56697;label,52235;label's,522357;labels,522357;laboratory,5226728679;lack,5225;lacked,522533;lacking,5225464;lacks,52257;ladies,523437;lady,5239;lady's,52397;lain,5246;land,5263;landed,526333;landing,5263464;lands,52637;language,52648243;language's,526482437;languages,526482437;large,52743;largely,5274359;larger,527437;largest,5274378;last,5278;last's,52787;lasts,52787;late,5283;later,52837;latest,528378;latter,528837;law,529;law's,5297;laws,5297;lay,529;layout,529688;lazy,5299;leach,53224;lead,5323;lead's,53237;leaded,532333;leader,532337;leading,5323464;leads,53237;leaf,5323;leaf's,53237;learn,53276;learning,53276464;learns,532767;least,53278;leave,53283;leave's,532837;leaved,532833;leaves,532837;leaving,5328464;lecture,5328873;lecture's,53288737;lectures,53288737;led,533;left,5338;leg,534;leg's,5347;legal,53425;legally,5342559;legs,5347;lend,5363;length,536484;less,5377;less's,53777;lesser,537737;lesson,537766;lesson's,5377667;lessons,5377667;let,538;let's,5387;lets,5387;letter,538837;letter's,5388377;letters,5388377;letting,5388464;level,53835;level's,538357;levels,538357;liable,542253;libraries,542727437;library,5427279;library's,54272797;lie,543;lie's,5437;lied,5433;lies,5437;life,5433;life's,54337;lifetime,54338463;lift,5438;light,54448;light's,544487;lights,544487;like,5453;like's,54537;liked,54533;likely,545359;likes,54537;likewise,54539473;liking,545464;limit,54648;limit's,546487;limited,5464833;limiting,54648464;limits,546487;line,5463;line's,54637;linear,546327;lines,54637;link,5465;link's,54657;linked,546533;linking,5465464;links,54657;list,5478;list's,54787;listed,547833;listen,547836;listing,5478464;lists,54787;literally,548372559;literature,5483728873;little,548853;live,5483;lived,54833;lives,54837;living,548464;load,5623;loaded,562333;loading,5623464;loads,56237;loan,5626;local,56225;location,56228466;location's,562284667;locations,562284667;lock,5625;locked,562533;locking,5625464;locks,56257;log,564;log's,5647;logged,564433;logging,5644464;logic,56442;logical,5644225;logs,5647;long,5664;longer,566437;longest,5664378;look,5665;look's,56657;looked,566533;looking,5665464;looks,56657;loop,5667;loose,56673;lorries,5677437;lorry,56779;lorry's,567797;lose,5673;loses,56737;losing,567464;loss,5677;lost,5678;lot,568;lot's,5687;lots,5687;loudly,568359;love,5683;low,569;lower,56937;lowest,569378;luck,5825;lucky,58259;lunch,58624;lying,59464;machine,6224463;machine's,62244637;machines,62244637;mad,623;made,6233;magic,62442;magnetic,62463842;magnitude,624648833;mail,6245;main,6246;mainly,624659;maintain,62468246;maintained,6246824633;maintaining,62468246464;maintains,624682467;major,62567;majority,62567489;make,6253;make's,62537;makes,62537;making,625464;man,626;man's,6267;manage,626243;managed,6262433;manager,6262437;manages,6262437;managing,62624464;manipulation,626478528466;manner,626637;manual,626825;manual's,6268257;manuals,6268257;many,6269;map,627;march,62724;mark,6275;mark's,62757;marked,627533;market,627538;marking,6275464;marks,62757;marriage,62774243;marry,62779;mass,6277;massive,6277483;master,627837;match,62824;match's,628247;matches,6282437;material,62837425;material's,628374257;materials,628374257;mathematical,628436284225;mathematics,62843628427;matter,628837;matter's,6288377;matters,6288377;maximum,6294686;may,629;maybe,62923;me,63;mean,6326;mean's,63267;meaning,6326464;meaning's,63264647;meaningful,6326464385;meaningless,63264645377;meanings,63264647;means,63267;meant,63268;measure,6327873;measure's,63278737;measured,63278733;measures,63278737;measuring,632787464;mechanic,63242642;mechanic's,632426427;mechanics,632426427;mechanism,632426476;media,63342;medical,6334225;medium,633486;medium's,6334867;mediums,6334867;meet,6338;meet's,63387;meeting,6338464;meeting's,63384647;meetings,63384647;meets,63387;member,636237;member's,6362377;members,6362377;membership,6362377447;memory,636679;men,636;mention,6368466;mention's,63684667;mentioned,636846633;mentioning,6368466464;mentions,63684667;mere,6373;merely,637359;merit,63748;merit's,637487;merits,637487;mess,6377;message,6377243;message's,63772437;messages,63772437;messy,63779;met,638;metal,63825;method,638463;method's,6384637;methods,6384637;middle,643353;midnight,64364448;might,64448;mile,6453;mile's,64537;miles,64537;military,64548279;military's,645482797;million,6455466;million's,64554667;millions,64554667;mind,6463;mind's,64637;minded,646333;minding,6463464;minds,64637;mine,6463;minimal,6464625;minimum,6464686;minor,64667;minority,64667489;minute,646883;minute's,6468837;minutes,6468837;mislead,6475323;misleading,6475323464;misleads,64753237;misled,647533;miss,6477;missed,647733;misses,647737;missing,6477464;mistake,6478253;mistake's,64782537;mistaken,64782536;mistakes,64782537;mistaking,647825464;mistook,6478665;misunderstand,6478633778263;misunderstanding,6478633778263464;misunderstands,64786337782637;misunderstood,6478633778663;misuse,647873;mix,649;mixed,64933;mixes,64937;mixing,649464;mod,663;mode,6633;model,66335;model's,663357;models,663357;modern,663376;modified,66343433;modifies,66343437;modify,663439;modifying,663439464;moment,666368;money,66639;monitor,6664867;month,66684;month's,666847;months,666847;moral,66725;more,6673;morning,6676464;morning's,66764647;mornings,66764647;most,6678;mostly,667859;mother,668437;motion,668466;mouth,66884;move,6683;move's,66837;moved,66833;movement,66836368;movement's,668363687;movements,668363687;moves,66837;movie,66843;moving,668464;much,6824;multiple,68584753;music,68742;must,6878;my,69;myself,697353;mysterious,6978374687;naive,62483;name,6263;name's,62637;named,62633;namely,626359;names,62637;naming,626464;nasty,62789;nation,628466;national,62846625;natural,6288725;naturally,628872559;nature,628873;naughty,6284489;near,6327;nearby,632729;nearer,632737;nearest,6327378;nearly,632759;necessarily,63237727459;necessary,632377279;necessity,632377489;neck,6325;need,6333;need's,63337;needed,633333;needing,6333464;needs,63337;negative,63428483;neither,6348437;nervous,6378687;net,638;network,6389675;network's,63896757;networks,63896757;never,63837;nevertheless,638378435377;new,639;news,6397;next,6398;nice,6423;nicer,64237;nicest,642378;night,64448;nine,6463;no,66;nobody,662639;noise,66473;noisy,66479;none,6663;nonsense,66673673;nor,667;normal,667625;normally,66762559;north,66784;not,668;note,6683;note's,66837;noted,66833;notes,66837;nothing,6684464;notice,668423;notice's,6684237;noticed,6684233;notices,6684237;noticing,66842464;notify,668439;noting,668464;novel,66835;now,669;nowadays,66923297;nowhere,6694373;numb,6862;number,686237;number's,6862377;numbers,6862377;numbest,6862378;numerical,686374225;numerous,68637687;obey,6239;object,625328;object's,6253287;objected,62532833;objecting,625328464;objection,625328466;objection's,6253284667;objections,6253284667;objects,6253287;obscure,6272873;observation,62737828466;observe,6273783;observed,62737833;observes,62737837;observing,627378464;obtain,628246;obtained,62824633;obtaining,628246464;obtains,6282467;obvious,6284687;obviously,628468759;occasion,62227466;occasion's,622274667;occasional,6222746625;occasionally,622274662559;occasions,622274667;occupied,62287433;occupies,62287437;occupy,622879;occupying,622879464;occur,62287;occurred,62287733;occurring,622877464;occurs,622877;odd,633;odds,6337;of,63;off,633;offer,63337;offer's,633377;offered,6333733;offering,63337464;offers,633377;office,633423;office's,6334237;officer,6334237;offices,6334237;official,63342425;often,63836;oh,64;oil,645;old,653;older,65337;oldest,653378;omit,6648;omits,66487;omitted,6648833;omitting,66488464;on,66;once,6623;one,663;one's,6637;ones,6637;only,6659;onto,6686;open,6736;open's,67367;opened,673633;opening,6736464;opens,67367;operate,6737283;operated,67372833;operates,67372837;operating,673728464;operation,673728466;operation's,6737284667;operations,6737284667;operator,67372867;operator's,673728677;operators,673728677;opinion,6746466;opinion's,67464667;opinions,67464667;opportunities,6776788648437;opportunity,67767886489;opportunity's,677678864897;oppose,677673;opposed,6776733;opposes,6776737;opposing,67767464;opposite,67767483;opposition,6776748466;option,678466;option's,6784667;optional,67846625;options,6784667;or,67;order,67337;order's,673377;ordered,6733733;ordering,67337464;orders,673377;ordinary,67346279;origin,674446;original,67444625;originally,6744462559;other,68437;others,684377;otherwise,684379473;ought,68448;our,687;ours,6877;ourselves,687735837;out,688;outer,68837;output,688788;outside,6887433;over,6837;overall,6837255;owe,693;owed,6933;owes,6937;owing,69464;own,696;owner,69637;owner's,696377;owners,696377;pack,7225;package,7225243;package's,72252437;packages,72252437;packet,722538;page,7243;page's,72437;pages,72437;paid,7243;pain,7246;painful,7246385;pair,7247;pair's,72477;pairs,72477;paper,72737;paper's,727377;papers,727377;paragraph,727247274;parallel,72725535;parent,727368;park,7275;part,7278;part's,72787;partial,7278425;partially,727842559;particular,7278428527;particularly,727842852759;parties,7278437;partly,727859;parts,72787;party,72789;party's,727897;pass,7277;passed,727733;passes,727737;passing,7277464;past,7278;patch,72824;path,7284;patient,7284368;pattern,7288376;pattern's,72883767;patterns,72883767;pause,72873;pay,729;payed,72933;paying,729464;pays,7297;peace,73223;peak,7325;peculiar,73285427;pen,736;people,736753;per,737;perfect,7373328;perfectly,737332859;perform,7373676;performance,73736762623;performed,737367633;performing,7373676464;performs,73736767;perhaps,7374277;period,737463;permanent,737626368;permanently,73762636859;permission,7376477466;permit,737648;permits,7376487;permitted,737648833;permitting,7376488464;person,737766;person's,7377667;personal,73776625;personally,7377662559;persons,7377667;persuade,73778233;persuaded,737782333;persuades,737782337;persuading,7377823464;petrol,738765;phase,74273;phenomenon,7436663666;philosophy,7445676749;phone,74663;phrase,747273;phrase's,7472737;phrases,7472737;physical,74974225;pi,74;pick,7425;picked,742533;picking,7425464;picks,74257;picture,7428873;picture's,74288737;pictures,74288737;piece,74323;piece's,743237;pieces,743237;pile,7453;pint,7468;pipe,7473;place,75223;place's,752237;placed,752233;places,752237;placing,7522464;plain,75246;plan,7526;plan's,75267;plane,75263;planet,752638;planned,7526633;planning,75266464;plans,75267;plant,75268;plastic,7527842;play,7529;played,752933;playing,7529464;plays,75297;plea,7532;pleasant,75327268;please,753273;pleased,7532733;pleases,7532737;pleasing,75327464;plenty,753689;plot,7568;plot's,75687;plots,75687;plug,7584;plus,7587;pocket,762538;poem,7636;poet,7638;point,76468;point's,764687;pointed,7646833;pointing,76468464;pointless,764685377;points,764687;police,765423;police's,7654237;policies,76542437;policy,765429;policy's,7654297;political,765484225;poll,7655;pool,7665;poor,7667;pop,767;popular,7678527;population,7678528466;port,7678;position,76748466;position's,767484667;positions,767484667;positive,76748483;possibilities,7677424548437;possibility,76774245489;possibility's,767742454897;possible,76774253;possibly,76774259;post,7678;posted,767833;posting,7678464;postmaster,7678627837;posts,76787;potential,768368425;potentially,76836842559;pound,76863;pound's,768637;pounds,768637;power,76937;power's,769377;powerful,76937385;powers,769377;practical,772284225;practically,77228422559;practice,77228423;precise,7732473;precisely,773247359;prefer,773337;preferable,7733372253;preferably,7733372259;preference,7733373623;preferred,773337733;preferring,7733377464;prefers,7733377;preparation,77372728466;prepare,7737273;prepared,77372733;prepares,77372737;preparing,773727464;presence,77373623;present,7737368;present's,77373687;presented,773736833;presenting,7737368464;presents,77373687;preserve,77373783;president,773743368;press,77377;pressed,7737733;presses,7737737;pressing,77377464;pressure,77377873;presumably,7737862259;presume,7737863;pretty,773889;prevent,7738368;prevented,773836833;preventing,7738368464;prevents,77383687;previous,77384687;previously,7738468759;price,77423;price's,774237;prices,774237;primary,7746279;prime,77463;primitive,774648483;principle,774624753;principle's,7746247537;principles,7746247537;print,77468;printed,7746833;printer,7746837;printer's,77468377;printers,77468377;printing,77468464;printout,77468688;prints,774687;prior,77467;private,7748283;probably,77622259;problem,7762536;problem's,77625367;problems,77625367;procedure,776233873;process,7762377;process's,77623777;processed,776237733;processes,776237737;processing,7762377464;processor,776237767;processor's,7762377677;processors,7762377677;produce,7763823;produced,77638233;produces,77638237;producing,776382464;product,7763828;product's,77638287;production,7763828466;products,77638287;professional,776337746625;program,7764726;program's,77647267;programmed,7764726633;programmer,7764726637;programmer's,77647266377;programmers,77647266377;programming,77647266464;programs,77647267;progress,77647377;project,7765328;project's,77653287;projects,77653287;promise,7766473;promised,77664733;promises,77664737;promising,776647464;prompt,776678;promptly,77667859;prone,77663;proof,77663;proper,776737;properly,77673759;properties,7767378437;property,77673789;property's,776737897;proportion,7767678466;proposal,77676725;propose,7767673;proposed,77676733;proposes,77676737;proposing,776767464;prospect,77677328;protect,7768328;protected,776832833;protecting,7768328464;protection,7768328466;protects,77683287;protest,7768378;prove,77683;proved,776833;proves,776837;provide,7768433;provided,77684333;provides,77684337;providing,776843464;proving,7768464;public,782542;publication,78254228466;publicity,782542489;publicly,78254259;publish,7825474;published,782547433;publishes,782547437;publishing,7825474464;pull,7855;pulled,785533;pulling,7855464;pulls,78557;punctuation,78628828466;puncture,78628873;purchase,78724273;pure,7873;purely,787359;purpose,7877673;purpose's,78776737;purposes,78776737;push,7874;pushed,787433;pushes,787437;pushing,7874464;put,788;put's,7887;puts,7887;putt,7888;putted,788833;putting,7888464;putts,78887;qualified,782543433;qualifies,782543437;qualify,7825439;qualifying,7825439464;quality,7825489;quantities,7826848437;quantity,78268489;quantity's,782684897;quarter,7827837;question,78378466;question's,783784667;questions,783784667;queue,78383;quick,78425;quicker,7842537;quickest,78425378;quickly,7842559;quiet,78438;quietly,7843859;quit,7848;quite,78483;quits,78487;quitting,78488464;quote,78683;quote's,786837;quoted,786833;quotes,786837;quoting,7868464;race,7223;radio,72346;rain,7246;raise,72473;raised,724733;raises,724737;raising,7247464;ran,726;random,726366;randomly,72636659;range,72643;rapid,72743;rapidly,7274359;rare,7273;rarely,727359;rate,7283;rate's,72837;rates,72837;rather,728437;raw,729;re,73;reach,73224;reach's,732247;reached,7322433;reaches,7322437;reaching,73224464;react,73228;reaction,73228466;read,7323;read's,73237;readable,73232253;reader,732337;reader's,7323377;readers,7323377;readily,7323459;reading,7323464;reads,73237;ready,73239;real,7325;reality,7325489;really,732559;reason,732766;reason's,7327667;reasonable,7327662253;reasonably,7327662259;reasons,7327667;recall,732255;receive,7323483;received,73234833;receives,73234837;receiving,732348464;recent,732368;recently,73236859;reception,732378466;recognition,73264648466;recommend,732666363;recommendation,73266636328466;recommended,73266636333;recommending,732666363464;recommends,7326663637;record,732673;record's,7326737;recorded,73267333;recording,732673464;records,7326737;recover,7326837;recovered,732683733;recovering,7326837464;recovers,73268377;red,733;reduce,733823;reduced,7338233;reduces,7338237;reducing,73382464;reduction,733828466;redundant,733863268;refer,73337;reference,733373623;reference's,7333736237;references,7333736237;referred,73337733;referring,733377464;refers,733377;reflect,7335328;reflected,733532833;reflecting,7335328464;reflection,7335328466;reflects,73353287;refuse,733873;refused,7338733;refuses,7338737;refusing,73387464;regard,734273;regarded,73427333;regarding,734273464;regardless,7342735377;regards,7342737;region,734466;register,73447837;registered,7344783733;registering,73447837464;registers,734478377;regret,734738;regular,7348527;regularly,734852759;regulation,7348528466;regulation's,73485284667;regulations,73485284667;reject,735328;rejected,73532833;rejecting,735328464;rejects,7353287;relate,735283;related,7352833;relates,7352837;relating,73528464;relation,73528466;relationship,735284667447;relative,73528483;relatively,7352848359;release,7353273;release's,73532737;released,73532733;releases,73532737;releasing,735327464;relevance,735382623;relevant,73538268;reliable,73542253;religion,73544466;religious,735444687;religious's,7354446877;reluctant,735828268;rely,7359;remain,736246;remained,73624633;remaining,736246464;remains,7362467;remark,736275;remark's,7362757;remarks,7362757;remember,73636237;remembered,7363623733;remembering,73636237464;remembers,736362377;remind,736463;reminded,73646333;reminding,736463464;reminds,7364637;remote,736683;remotely,73668359;removal,7366825;remove,736683;removed,7366833;removes,7366837;removing,73668464;repair,737247;repeat,737328;repeated,73732833;repeatedly,7373283359;repeating,737328464;repeats,7373287;replace,7375223;replaced,73752233;replacement,73752236368;replaces,73752237;replacing,737522464;replied,7375433;replies,7375437;reply,73759;reply's,737597;replying,73759464;report,737678;report's,7376787;reported,73767833;reporting,737678464;reports,7376787;represent,737737368;representation,73773736828466;representative,73773736828483;represented,73773736833;representing,737737368464;represents,7377373687;reproduce,737763823;request,7378378;request's,73783787;requested,737837833;requesting,7378378464;requests,73783787;require,7378473;required,73784733;requirement,73784736368;requirement's,737847363687;requirements,737847363687;requires,73784737;requiring,737847464;research,73732724;reserve,7373783;reserved,73737833;reserves,73737837;reserving,737378464;resident,73743368;resolution,7376588466;resort,737678;resource,73768723;resource's,737687237;resources,737687237;respect,7377328;respect's,73773287;respectively,737732848359;respects,73773287;respond,7377663;response,73776673;response's,737766737;responses,737766737;responsibility,73776674245489;responsible,73776674253;rest,7378;restart,7378278;restore,7378673;restored,73786733;restores,73786737;restoring,737867464;restrict,73787428;restricted,7378742833;restricting,73787428464;restricts,737874287;result,737858;result's,7378587;resulted,73785833;resulting,737858464;results,7378587;retain,738246;return,738876;return's,7388767;returned,73887633;returning,738876464;returns,7388767;reveal,738325;revealed,73832533;revealing,738325464;reveals,7383257;reverse,7383773;review,738439;rewrite,7397483;rid,743;ridding,7433464;ride,7433;ridiculous,7434285687;rids,7437;right,74448;right's,744487;rights,744487;ring,7464;rise,7473;risk,7475;river,74837;road,7623;role,7653;roll,7655;room,7666;room's,76667;rooms,76667;root,7668;rough,76844;roughly,7684459;round,76863;route,76883;routine,7688463;row,769;rubber,782237;rubbish,7822474;rule,7853;rule's,78537;rules,78537;run,786;run's,7867;running,7866464;runs,7867;rush,7874;sad,723;sadly,72359;safe,7233;safely,723359;safer,72337;safest,723378;safety,723389;said,7243;saint,72468;sake,7253;sale,7253;sale's,72537;sales,72537;same,7263;sample,726753;sat,728;satisfied,728473433;satisfies,728473437;satisfy,7284739;satisfying,7284739464;save,7283;saved,72833;saves,72837;saving,728464;saw,729;say,729;saying,729464;says,7297;scale,72253;scan,7226;scene,72363;scheme,724363;school,724665;school's,7246657;schools,7246657;science,7243623;science's,72436237;sciences,72436237;scientific,7243684342;score,72673;score's,726737;scores,726737;scrap,72727;scratch,7272824;screen,727336;screen's,7273367;screens,7273367;script,727478;search,732724;searched,73272433;searches,73272437;searching,732724464;season,732766;second,732663;second's,7326637;secondary,732663279;secondly,73266359;seconds,7326637;secret,732738;secretary,732738279;section,7328466;section's,73284667;sections,73284667;secure,732873;security,73287489;see,733;see's,7337;seeing,733464;seek,7335;seeking,7335464;seeks,73357;seem,7336;seemed,733633;seeming,7336464;seems,73367;seen,7336;sees,7337;select,735328;selected,73532833;selecting,735328464;selection,735328466;selects,7353287;self,7353;sell,7355;selling,7355464;sells,73557;seminar,7364627;send,7363;sending,7363464;sends,73637;senior,736467;sense,73673;sensible,73674253;sensibly,73674259;sensitive,736748483;sent,7368;sentence,73683623;sentence's,736836237;sentences,736836237;separate,73727283;separately,7372728359;sequence,73783623;sequence's,737836237;sequences,737836237;serial,737425;series,737437;serious,7374687;seriously,737468759;serve,73783;serve's,737837;served,737833;server,737837;serves,737837;service,7378423;service's,73784237;services,73784237;serving,7378464;session,7377466;session's,73774667;sessions,73774667;set,738;set's,7387;sets,7387;setting,7388464;settle,738853;settled,7388533;settles,7388537;settling,73885464;seven,73836;several,7383725;severe,738373;severely,73837359;sex,739;shall,74255;shame,74263;shape,74273;share,74273;share's,742737;shared,742733;shares,742737;sharing,7427464;sharp,74277;she,743;sheet,74338;shelf,74353;shell,74355;shift,74438;ship,7447;shoot,74668;shop,7467;shopped,7467733;shopping,74677464;shops,74677;short,74678;shortage,74678243;shorter,7467837;shortest,74678378;shortly,7467859;should,746853;show,7469;show's,74697;showed,746933;showing,7469464;shown,74696;shows,74697;shut,7488;shuts,74887;shutting,74888464;side,7433;side's,74337;sides,74337;sight,74448;sign,7446;sign's,74467;signal,744625;signal's,7446257;signals,7446257;signed,744633;significance,744643422623;significant,74464342268;significantly,7446434226859;signing,7446464;signs,74467;silly,74559;similar,7464527;similarly,746452759;simple,746753;simpler,7467537;simplest,74675378;simply,746759;simultaneous,746858263687;simultaneously,74685826368759;since,74623;sincerely,746237359;single,746453;sit,748;site,7483;site's,74837;sites,74837;sits,7487;sitting,7488464;situation,748828466;situation's,7488284667;situations,7488284667;six,749;size,7493;size's,74937;sizes,74937;skill,75455;skill's,754557;skills,754557;sleep,75337;slight,754448;slightly,75444859;slip,7547;slow,7569;slower,756937;slowest,7569378;slowly,756959;small,76255;smaller,7625537;smallest,76255378;smile,76453;smooth,766684;so,76;social,762425;society,7624389;soft,7638;software,76389273;sold,7653;solely,765359;solid,76543;solution,76588466;solution's,765884667;solutions,765884667;solve,76583;solved,765833;solves,765837;solving,7658464;some,7663;somebody,76632639;somehow,7663469;someone,7663663;someplace,766375223;something,766384464;sometime,76638463;sometimes,766384637;somewhat,76639428;somewhere,766394373;son,766;soon,7666;sooner,766637;soonest,7666378;sophisticate,767447842283;sophisticated,7674478422833;sophisticates,7674478422837;sophisticating,76744784228464;sorry,76779;sort,7678;sort's,76787;sorted,767833;sorting,7678464;sorts,76787;sought,768448;sound,76863;sound's,768637;sounded,7686333;sounding,76863464;sounds,768637;source,768723;source's,7687237;sources,7687237;south,76884;southern,76884376;space,77223;space's,772237;spaces,772237;spare,77273;speak,77325;speaker,7732537;speaker's,77325377;speakers,77325377;speaking,77325464;speaks,773257;special,7732425;specially,773242559;specific,77324342;specifically,773243422559;specified,773243433;specifies,773243437;specify,7732439;specifying,7732439464;speech,773324;speed,77333;spell,77355;spelling,77355464;spells,773557;spend,77363;spending,77363464;spends,773637;spent,77368;spirit,774748;spite,77483;split,77548;splits,775487;splitting,775488464;spoke,77653;spoken,776536;spot,7768;spots,77687;spotted,7768833;spotting,77688464;spread,777323;spreading,777323464;spreads,7773237;spring,777464;square,778273;stable,782253;staff,78233;stage,78243;stage's,782437;stages,782437;stand,78263;stand's,782637;standard,78263273;standard's,782632737;standards,782632737;standing,78263464;stands,782637;start,78278;start's,782787;started,7827833;starting,78278464;starts,782787;state,78283;state's,782837;stated,782833;statement,782836368;statement's,7828363687;statements,7828363687;states,782837;stating,7828464;station,7828466;station's,78284667;stations,78284667;statistic,782847842;statistic's,7828478427;statistical,78284784225;statistics,7828478427;status,782887;stay,7829;stayed,782933;staying,7829464;stays,78297;steal,78325;step,7837;stick,78425;sticking,78425464;sticks,784257;still,78455;stock,78625;stone,78663;stone's,786637;stones,786637;stood,78663;stop,7867;stop's,78677;stopped,7867733;stopping,78677464;stops,78677;storage,7867243;store,78673;stored,786733;stores,786737;storing,7867464;story,78679;straight,78724448;straightforward,787244483679273;strange,7872643;strategy,78728349;stream,787326;street,787338;strength,78736484;strict,787428;strictly,78742859;strike,787453;strike's,7874537;strikes,7874537;striking,78745464;string,787464;string's,7874647;strings,7874647;strong,787664;strongly,78766459;struck,787825;structure,787828873;structure's,7878288737;structures,7878288737;stuck,78825;student,7883368;student's,78833687;students,78833687;studied,7883433;studies,7883437;study,78839;study's,788397;studying,78839464;stuff,78833;stupid,788743;style,78953;subject,7825328;subject's,78253287;subjects,78253287;submit,782648;submits,7826487;submitted,782648833;submitting,7826488464;subsequent,7827378368;subset,782738;substantial,78278268425;substitute,7827848883;subtle,782853;succeed,7822333;success,7822377;successful,7822377385;successfully,782237738559;such,7824;sudden,783336;suddenly,78333659;suffer,783337;suffered,78333733;suffering,783337464;suffers,7833377;suffice,7833423;sufficient,7833424368;sufficiently,783342436859;sugar,78427;suggest,7844378;suggested,784437833;suggesting,7844378464;suggestion,7844378466;suggestion's,78443784667;suggestions,78443784667;suggests,78443787;suit,7848;suitable,78482253;suitably,78482259;suited,784833;suiting,7848464;suits,78487;sum,786;summary,7866279;summer,786637;sun,786;superior,78737467;supervisor,7873784767;supplied,78775433;supplies,78775437;supply,787759;supply's,7877597;supplying,787759464;support,7877678;supported,787767833;supporting,7877678464;supports,78776787;suppose,7877673;supposed,78776733;supposedly,7877673359;supposes,78776737;supposing,787767464;sure,7873;surely,787359;surface,7873223;surprise,78777473;surprised,787774733;surprises,787774737;surprising,7877747464;survey,787839;survive,7878483;survived,78784833;survives,78784837;surviving,787848464;suspect,7877328;suspected,787732833;suspecting,7877328464;suspects,78773287;suspend,7877363;suspended,787736333;suspending,7877363464;suspends,78773637;suspicion,787742466;switch,794824;switch's,7948247;switched,79482433;switches,79482437;switching,794824464;symbol,796265;symbol's,7962657;symbols,7962657;syntax,796829;system,797836;system's,7978367;systems,7978367;table,82253;table's,822537;tables,822537;take,8253;take's,82537;taken,82536;takes,82537;taking,825464;talk,8255;talk's,82557;talked,825533;talking,8255464;talks,82557;tank,8265;tank's,82657;tanks,82657;tape,8273;tape's,82737;tapes,82737;target,827438;task,8275;task's,82757;tasks,82757;taste,82783;taught,828448;tax,829;tea,832;teach,83224;teacher,8322437;teaches,8322437;teaching,83224464;team,8326;technical,832464225;technique,832464783;technique's,8324647837;techniques,8324647837;technology,8324665649;tedious,8334687;teeth,83384;telephone,835374663;television,8353847466;tell,8355;telling,8355464;tells,83557;temperature,83673728873;temporarily,83676727459;temporary,836767279;ten,836;tend,8363;tendency,83633629;tends,83637;term,8376;term's,83767;terminal,83764625;terminal's,837646257;terminals,837646257;terminology,83764665649;terms,83767;terribly,83774259;test,8378;test's,83787;tested,837833;testing,8378464;tests,83787;text,8398;than,8426;thank,84265;thanks,842657;that,8428;that's,84287;the,843;their,84347;them,8436;themselves,8436735837;then,8436;theoretical,84367384225;theory,843679;there,84373;there's,843737;thereby,8437329;therefore,843733673;these,84373;they,8439;thin,8446;thing,84464;thing's,844647;things,844647;think,84465;thinking,84465464;thinks,844657;third,84473;this,8447;thoroughly,8467684459;those,84673;though,846844;thought,8468448;thought's,84684487;thoughts,84684487;thousand,84687263;thousand's,846872637;thousands,846872637;threat,847328;three,84733;threw,84739;through,8476844;throughout,8476844688;throw,84769;throwing,84769464;thrown,847696;throws,847697;thus,8487;ticket,842538;ticket's,8425387;tickets,8425387;tie,843;tie's,8437;tied,8433;ties,8437;tight,84448;till,8455;time,8463;time's,84637;timed,84633;times,84637;timing,846464;tin,846;title,84853;title's,848537;titles,848537;to,86;today,86329;together,86438437;token,86536;told,8653;tomorrow,86667769;tonight,8664448;too,866;took,8665;tooth,86684;tooth's,866847;top,867;topic,86742;topic's,867427;topics,867427;total,86825;totally,8682559;touch,86824;touched,8682433;touches,8682437;touching,86824464;toward,869273;towards,8692737;town,8696;trace,87223;track,87225;track's,872257;tracks,872257;traditional,87234846625;traffic,8723342;train,87246;trained,8724633;training,87246464;trains,872467;transfer,87267337;transferred,87267337733;transferring,872673377464;transfers,872673377;translate,872675283;translated,8726752833;translates,8726752837;translating,87267528464;translation,87267528466;transport,872677678;trap,8727;trapped,8727733;trapping,87277464;traps,87277;trash,87274;travel,872835;treat,87328;treated,8732833;treating,87328464;treatment,873286368;treats,873287;tree,8733;tree's,87337;trees,87337;trial,87425;trick,87425;tried,87433;tries,87437;trip,8747;trivial,8748425;trouble,8768253;truck,87825;truck's,878257;trucks,878257;true,8783;truly,87859;trunk,87865;trust,87878;trusted,8787833;trusting,87878464;trusts,878787;truth,87884;try,879;try's,8797;trying,879464;tune,8863;turn,8876;turn's,88767;turned,887633;turning,8876464;turns,88767;twelve,893583;twenty,893689;twice,89423;two,896;tying,89464;type,8973;type's,89737;typed,89733;types,89737;typical,8974225;typing,897464;ugly,8459;ultimate,85846283;ultimately,8584628359;unable,862253;unacceptable,862223782253;unaware,8629273;uncertain,862378246;unclear,8625327;under,86337;undergraduate,8633747238283;undergraduate's,86337472382837;undergraduates,86337472382837;underneath,8633763284;understand,8633778263;understanding,8633778263464;understands,86337782637;understood,8633778663;unfortunate,86367886283;unfortunately,8636788628359;unhappy,8642779;uniform,8643676;unique,864783;unit,8648;unit's,86487;unite,86483;units,86487;universal,864837725;universities,864837748437;university,8648377489;university's,86483774897;unknown,8656696;unless,865377;unlike,865453;unlikely,86545359;unlimited,865464833;unnecessarily,8663237727459;unnecessary,86632377279;unpleasant,8675327268;unreasonable,867327662253;unsuitable,8678482253;until,86845;unusual,8687825;unwanted,86926833;up,87;update,873283;updated,8732833;updates,8732837;updating,87328464;upon,8766;upper,87737;upset,87738;upsets,877387;upsetting,877388464;upwards,8792737;us,87;usage,87243;use,873;use's,8737;used,8733;useful,873385;useless,8735377;user,8737;user's,87377;users,87377;uses,8737;using,87464;usual,87825;usually,8782559;utility,8845489;utterly,8883759;vacation,82228466;vacation's,822284667;vacations,822284667;vague,82483;vaguely,8248359;valid,82543;validity,82543489;valuable,82582253;value,82583;value's,825837;values,825837;van,826;vans,8267;variable,82742253;variable's,827422537;variables,827422537;variation,827428466;varied,827433;varies,827437;variety,8274389;various,8274687;vary,8279;varying,8279464;vast,8278;vastly,827859;vector,832867;version,8377466;version's,83774667;versions,83774667;very,8379;via,842;vice,8423;video,84336;view,8439;view's,84397;views,84397;virtually,847882559;virtue,847883;visible,8474253;vision,847466;visit,84748;vital,84825;voice,86423;volume,865863;vote,8683;vote's,86837;votes,86837;wait,9248;waited,924833;waiting,9248464;waits,92487;walk,9255;walked,925533;walking,9255464;walks,92557;wall,9255;wall's,92557;walls,92557;want,9268;want's,92687;wanted,926833;wanting,9268464;wants,92687;war,927;warm,9276;warn,9276;warned,927633;warning,9276464;warns,92767;was,927;wash,9274;waste,92783;wasted,927833;wastes,927837;wasting,9278464;watch,92824;watched,9282433;watches,9282437;watching,92824464;water,92837;way,929;way's,9297;ways,9297;we,93;weapon,932766;wear,9327;wearing,9327464;wears,93277;weather,9328437;week,9335;week's,93357;weekend,9335363;weeks,93357;weight,934448;weird,93473;welcome,9352663;welcomed,93526633;welcomes,93526637;welcoming,935266464;well,9355;went,9368;were,9373;west,9378;western,9378376;what,9428;whatever,94283837;whatsoever,9428763837;wheel,94335;wheel's,943357;wheels,943357;when,9436;whenever,94363837;where,94373;whereas,9437327;whereby,9437329;wherever,94373837;whether,9438437;which,94424;while,94453;whilst,944578;white,94483;who,946;whoever,9463837;whole,94653;whom,9466;whose,94673;why,949;wide,9433;widely,943359;wider,94337;widespread,9433777323;widest,943378;wife,9433;wild,9453;will,9455;willed,945533;willing,9455464;wills,94557;win,946;wind,9463;window,946369;window's,9463697;windows,9463697;wine,9463;winning,9466464;wins,9467;winter,946837;wire,9473;wise,9473;wish,9474;wish's,94747;wished,947433;wishes,947437;wishing,9474464;with,9484;withdraw,94843729;within,948446;without,9484688;woman,96626;woman's,966267;women,96636;won,966;won's,9667;wonder,966337;wondered,96633733;wonderful,966337385;wondering,966337464;wonders,9663377;wooden,966336;word,9673;word's,96737;worded,967333;wording,9673464;words,96737;wore,9673;work,9675;work's,96757;worked,967533;worker,967537;worker's,9675377;workers,9675377;working,9675464;works,96757;world,96753;worn,9676;worried,9677433;worries,9677437;worry,96779;worrying,96779464;worse,96773;worst,96778;worth,96784;worthwhile,9678494453;worthy,967849;would,96853;write,97483;writer,974837;writes,974837;writing,9748464;written,9748836;wrong,97664;wrote,97683;year,9327;year's,93277;years,93277;yellow,935569;yes,937;yesterday,937837329;yet,938;you,968;young,96864;young's,968647;your,9687;yours,96877;yourself,96877353;zero,9376;"
var dictArray = dict.split(';')
var words = {}


for(var i =0; i<dictArray.length;i++){
	var tmp = dictArray[i].split(",")
	words[tmp[1]] = tmp[0]
	
}


this.addEventListener('keydown', (event) => {
    if (event.keyCode == 97) { 						//1
        clicked_7()
    }else if (event.keyCode == 98) { 				//2
        clicked_8()
    }else if (event.keyCode == 99) { 				//3
        clicked_9()
    }else if (event.keyCode == 100) { 				//4
        clicked_4()
    }else if (event.keyCode == 101) { 				//5
        clicked_5()
    }else if (event.keyCode == 102) { 				//6
        clicked_6()
    }else if (event.keyCode == 103) { 				//7
        clicked_1()
    }else if (event.keyCode == 104) { 				//8
        clicked_2()
    }else if (event.keyCode == 105) { 				//9
        clicked_3()
    }else if (event.keyCode == 8) { 				//delete
        clicked_del()
    }else if (event.keyCode == 13 || event.keyCode == 32) { 				//delete
        clicked_sharp()
    }
	
})
function findLast(){
	var str = document.getElementById("text").innerHTML
	var n = str.split(" ");
    return n[n.length - 1];
}
function addSpace(){
	clearUnderline()
    var text = document.getElementById("text").innerHTML
	text=text+"‸"
	document.getElementById("text").innerHTML=text
}
function clearSpace(){
	clearUnderline()
    var text = document.getElementById("text").innerHTML
	text=text.replace("‸","")
	document.getElementById("text").innerHTML=text
}

function setUnderline() {
	clearUnderline()
    var text = document.getElementById("text").innerHTML
	text = text.slice(0,-1) + "<u>" + text.slice(-1,text.length)+"</u>"
    document.getElementById("text").innerHTML = text
}
function clearUnderline(){
	var text = document.getElementById("text").innerHTML
	text=text.replace("<u>","")
	text=text.replace("</u>","")
	document.getElementById("text").innerHTML=text
}

function startTime() {
	startTime = new Date()
	if(t9){
		document.getElementById("buttont9").style.backgroundColor = "#8cf442"
	}else{
		document.getElementById("buttont9").style.backgroundColor = "#FFFFFF"
	}
	
}
function cycleWords(){
	var word = findLast()
	var code = getCode(word)
	//console.log(words.findKey(words, {"basic"}))
}
function getCode(word){
	var code = ""
	for (var i = 0, len = word.length; i < len; i++) {
		if (word[i] == "a" || word[i] == "b" || word[i] == "c"){
			code+="2"
		}else if (word[i] == "d" || word[i] == "e" || word[i] == "f"){
			code+="3"
		}else if (word[i] == "g" || word[i] == "h" || word[i] == "i"){
			code+="4"
		}else if (word[i] == "j" || word[i] == "k" || word[i] == "l"){
			code+="5"
		}else if (word[i] == "m" || word[i] == "n" || word[i] == "o"){
			code+="6"
		}else if (word[i] == "p" || word[i] == "q" || word[i] == "r" || word[i] == "s"){
			code+="7"
		}else if (word[i] == "t" || word[i] == "u" || word[i] == "v"){
			code+="8"
		}else if (word[i] == "w" || word[i] == "x" || word[i] == "y" || word[i] == "z"){
			code+="9"
		}
	}
	
	return code
}
function highlightButton(but){
	if(but == "sharp"){
		document.getElementsByClassName("button#")[0].style.border  = "2px solid #1bc4fc"
		setTimeout(function(){
			clearHighlight("button#")
		}, DELAY_THRESHOLD/4)
	}else{
		document.getElementsByClassName("button"+but.toString())[0].style.border  = "2px solid #1bc4fc"
		setTimeout(function(){
			clearHighlight("button"+but.toString())
		}, DELAY_THRESHOLD/4)
	}
	
}
function clearHighlight(but){
	document.getElementsByClassName(but)[0].style.border = "2px solid #000000"
}
function clicked_del(){
	clearSpace()
	clearTimeout(timeout)
	clearUnderline()
	var str = document.getElementById("text").innerHTML
	if (str.length > 0){
		str = str.slice(0,-1)	
		document.getElementById("text").innerHTML = str
	}
	addSpace()
}
function tnine(){
	var word = findLast()
	var code = getCode(word)
	if(words[code]!=null){
		str=document.getElementById("text").innerHTML
		str=str.replace(word,words[code])
		document.getElementById("text").innerHTML=str
	}
}
function clicked_t9(){
	t9=!t9
	if(t9){
		document.getElementById("buttont9").style.backgroundColor = "#8cf442"
	}else{
		document.getElementById("buttont9").style.backgroundColor = "#FFFFFF"
	}
}

function clicked_1(){	
	highlightButton(1)
	clearSpace()
	lastPressed = 1
	str = document.getElementById("text").innerHTML
	document.getElementById("text").innerHTML = str+"."
	activeTyping=true
	timeout=setTimeout(function(){
		activeTyping=false
		addSpace()
	}, DELAY_THRESHOLD)
}
function clicked_2(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(2)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 2 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"a"
			numOfSamePresses=0
		}else if(lastPressed==2 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"b"
		}else if(lastPressed==2 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"c"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"a"
		}
		startTime = new Date()
		lastPressed = 2
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		document.getElementById("text").innerHTML += "a"
		tnine()
		addSpace()
	}	
}
function clicked_3(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(3)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 3 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"d"
			numOfSamePresses=0
		}else if(lastPressed==3 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"e"
		}else if(lastPressed==3 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"f"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"d"
		}
		startTime = new Date()
		lastPressed = 3
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		document.getElementById("text").innerHTML += "d"
		tnine()
		addSpace()
	}
	
}
function clicked_4(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(4)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 4 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"g"
			numOfSamePresses=0
		}else if(lastPressed==4 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"h"
		}else if(lastPressed==4 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"i"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"g"
		}
		startTime = new Date()
		lastPressed = 4
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
				document.getElementById("text").innerHTML += "g"
		tnine()
		addSpace()
	}
	
}
function clicked_5(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(5)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 5 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"j"
			numOfSamePresses=0
		}else if(lastPressed==5 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"k"
		}else if(lastPressed==5 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"l"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"j"
		}
		startTime = new Date()
		lastPressed = 5
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		document.getElementById("text").innerHTML += "j"
		tnine()
		addSpace()
	}
}
function clicked_6(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(6)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 6 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"m"
			numOfSamePresses=0
		}else if(lastPressed==6 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"n"
		}else if(lastPressed==6 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"o"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"m"
		}
		startTime = new Date()
		lastPressed = 6
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		document.getElementById("text").innerHTML += "m"
		tnine()
		addSpace()		
	}
}
function clicked_7(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(7)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 7 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"p"
			numOfSamePresses=0
		}else if(lastPressed==7 && numOfSamePresses%4 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"q"
		}else if(lastPressed==7 && numOfSamePresses%4 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"r"
		}else if(lastPressed==7 && numOfSamePresses%4 == 3){					//fast press and fourth letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"s"	
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"p"
		}
		startTime = new Date()
		lastPressed = 7
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		document.getElementById("text").innerHTML += "p"
		tnine()
		addSpace()		
	}
}
function clicked_8(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(8)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 8 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"t"
			numOfSamePresses=0
		}else if(lastPressed==8 && numOfSamePresses%3 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"u"
		}else if(lastPressed==8 && numOfSamePresses%3 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"v"
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"t"
		}
		startTime = new Date()
		lastPressed = 8
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		document.getElementById("text").innerHTML += "t"
		tnine()
		addSpace()		
	}
}
function clicked_9(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton(9)
	clearUnderline()
	if(t9 == false){
		endTime = new Date()
		var timeDiff = endTime - startTime 
		if (lastPressed == 9 && timeDiff < DELAY_THRESHOLD){
			numOfSamePresses++
		}else{
			numOfSamePresses=0
		}
		str = document.getElementById("text").innerHTML
		if(timeDiff > DELAY_THRESHOLD || numOfSamePresses==0){					// slow press
			document.getElementById("text").innerHTML = str+"w"
			numOfSamePresses=0
		}else if(lastPressed==9 && numOfSamePresses%4 == 1){					//fast press and second letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"x"
		}else if(lastPressed==9 && numOfSamePresses%4 == 2){					//fast press and third letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"y"
		}else if(lastPressed==9 && numOfSamePresses%4 == 3){					//fast press and fourth letter
			str=str.slice(0,-1)
			document.getElementById("text").innerHTML = str+"z"	
		}else{
			str=str.slice(0,-1)												//fast press back to first letter
			document.getElementById("text").innerHTML = str+"w"
		}
		startTime = new Date()
		lastPressed = 9
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
	}else{
		document.getElementById("text").innerHTML += "w"
		tnine()
		addSpace()		
	}
}
function clicked_star(){
	cycleWords()
}
function clicked_0(){
		clearSpace()
		clearTimeout(timeout)
		highlightButton(0)
		clearUnderline()
		activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
			addSpace()
		}, DELAY_THRESHOLD)
}
function clicked_sharp(){
	clearSpace()
	clearTimeout(timeout)
	highlightButton("sharp")
	clearUnderline()
	var str = document.getElementById("text").innerHTML
	document.getElementById("text").innerHTML = str + " "
	addSpace()
	activeTyping=true
		setUnderline()
		timeout=setTimeout(function(){
			activeTyping=false
		}, DELAY_THRESHOLD)
	clearUnderline()	
}
function clicked_clear(){
	clearSpace()
	clearTimeout(timeout)
	document.getElementById("text").innerHTML = ""
	addSpace()
}
function clicked_play(){
	str=document.getElementsByClassName("play")[0].innerHTML
	if (str ==="▶"){		//arrow
		str="⏹"				//square
	}else{
		str="▶"				//arrow
	}
	document.getElementsByClassName("play")[0].innerHTML=str
	stopwatchStart= new Date()
}

window.onload = startTime