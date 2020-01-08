import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../components/Link/Link';
import List from '../components/List/List';

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWidth = styled.img`
  width: 150px;
`;

const GithubName = styled.p`
  font-size: 2.0rem;
  color: #444444;
  margin: 0;
`;

const GithubUrl = styled.a`
  font-size: 1rem;
  text-decoration: none;
  margin: 0;
  color: #00b3e6;
`;

class Profile extends Component {
  state = {
    data: {},
    repositories: [],
    loading: true,
    error: ''
  };

  async componentDidMount() {
    try {
      const profile = await fetch('https://api.github.com/users/terieyenike');
      const profileJSON = await profile.json();

      if (profileJSON) {
        const repositories = await fetch(profileJSON.repos_url);
        const repositoriesJSON = await repositories.json();

        this.setState({
          data: profileJSON,
          repositories: repositoriesJSON,
          loading: false
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }
  }

  render() {
    const { data, loading, repositories, error } = this.state;

    if (loading || error) return <div>{loading ? 'Loading...' : error}</div>;

    const items = [
      { label: 'repos_url', value: data.repos_url },
      { label: 'company', value: data.company },
      { label: 'location', value: data.location },
      { label: 'email', value: data.email },
      { label: 'bio', value: data.bio }
    ];

    const projects = repositories.map(repository => ({
      label: repository.name,
      value: <Link url={repository.html_url} title='Github URL' />
    }));

    return (
      <ProfileWrapper>
        <Avatar>
          <ImageWidth src={data.avatar_url} alt='teri eyenike' />
          <GithubName>{data.name}</GithubName>
          <GithubUrl href={data.html_url} title="Github Url">Github Url</GithubUrl>
        </Avatar>

        <List title='Profile' items={items} />
        <List title='Projects' items={projects} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
