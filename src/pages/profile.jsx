import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/material/Divider'; // Import the Divider component
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/sidebar";

export default function UserCard() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/editprofile'); // Navigate to the edit-profile page
  };

  return (
    <>
      <Box
        sx={{
          marginLeft: "30rem",
          width: '40%',
          position: 'relative',
          overflow: { xs: 'auto', sm: 'initial' },
          padding: 3, // Added padding for better spacing
          
        }}
      >
        {/* Edit Profile Button */}
        <Button
          variant="outlined"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            margintop: "50px",
           
          }}
          onClick={handleEditProfile} // Add onClick handler
        >
          Edit Profile
        </Button>

        <Card
          orientation="horizontal"
          sx={{
            width: '97%',
            flexWrap: 'wrap',
            border: 0,
            [`& > *`]: {
              '--stack-point': '500px',
              minWidth:
                'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
            },
            overflow: 'auto',
            resize: 'horizontal',
            padding: 2, // Added padding for the card
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <Avatar
              sx={{ width: 100, height: 100, marginRight: 2 }}
              src="http://localhost:3000/editprofile"
              alt="Profile Photo"
            />
            <CardContent>
              <Typography fontSize="xl" fontWeight="lg">
                Alex Morrison
              </Typography>
              <Sheet
                sx={{
                  bgcolor: 'background.level1',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 12,
                  '& > div': { flex: 1 },
                }}
              >
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Post
                  </Typography>
                  <Typography fontWeight="lg">98</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Followers
                  </Typography>
                  <Typography fontWeight="lg">899</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Following
                  </Typography>
                  <Typography fontWeight="lg">579</Typography>
                </div>
              </Sheet>
              <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                Bio<br></br>
                .<br></br>
                .<br></br>
              </Typography>
            </CardContent>
          </Box>
        </Card>

        {/* Story Highlights */}
        
        <Box sx={{ padding: 2 }}>
          <Typography sx={{
            fontWeight:"bold",
            marginBottom: "1rem"
          }}>Highlights</Typography>
          <Box sx={{ display: 'flex', gap: 1.5, mb: 1,width:"100px" }}>
            {[1, 2, 3].map((story, index) => (
              <Avatar
                key={index}
                sx={{ width: 70, height: 70, border: '2px solid #f0f0f0', position: 'relative' }} // Reduced size and position relative
                src={`/assets/images/create.jpg`} // Placeholder image
                alt={`Story ${story}`}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(-50%, 50%)',
                    bgcolor: 'background.paper',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '16px',
                    color: 'text.primary',
                  }}
                >
                </Typography>
              </Avatar>
            ))}
          </Box>
          {/* Divider */}
          <Divider sx={{ mb: 2 }} />
        </Box>

        {/* Posts Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            mt: 1, // Reduced margin-top
            padding: 1,
            width: "38rem"
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((post, index) => (
            <Box
              key={index}
              sx={{
                height: 200, // Adjusted height
                bgcolor: 'background.level2',
                borderRadius: 'md',
                overflow: 'hidden', // Added to ensure image fits within the box
              }}
            >
              {/* Placeholder content for the post */}
              <img
                src={`https://via.placeholder.com/200?text=Post+${post}`} // Adjusted size
                alt={`Post ${post}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <div>
        <Sidebar/>
      </div>
    </>
  );
}
